import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import * as geometric from 'geometric'

import {
    curiosityManifest,
    opportunityManifest,
    spiritManifest
} from '../../data'
import './LineGraph.scss'

interface ManifestProps {
    sol: number
    earth_date: string
    total_photos: number
}

interface YearProps {
    Curiosity?: number
    Opportunity?: number
    Spirit?: number
}

interface DataProps {
    Year: number
    Curiosity: number
    Opportunity: number
    Spirit: number
}

const manifests: Array<{ name: string; data: ManifestProps[] }> = [
    {
        name: 'Curiosity',
        data: curiosityManifest
    },
    {
        name: 'Opportunity',
        data: opportunityManifest
    },
    {
        name: 'Spirit',
        data: spiritManifest
    }
]

const parseYearlyData = (): DataProps[] => {
    const map: { [year: string]: YearProps } = {}
    // prettier-ignore
    manifests.forEach(manifest => {
        manifest.data.forEach(m => {
            const [year] = m.earth_date.match(/^\w+/)
            const yearExists = map[year]
            const roverExists = map[year]?.[manifest.name]

            if (!yearExists) {
                map[year] = { [manifest.name]: m.total_photos }
            } else if (!roverExists) {
                map[year] = { ...map[year], [manifest.name]: m.total_photos }
            } else if (roverExists) {
                map[year][manifest.name] += m.total_photos
            }
        })
    })

    return Object.entries(map).map(([year, rovers]) => ({
        Year: +year,
        Curiosity: rovers.Curiosity || 0,
        Opportunity: rovers.Opportunity || 0,
        Spirit: rovers.Spirit || 0
    }))
}

const yearlyData = parseYearlyData()

const height = 447
const width = 1000
const margin = { left: 40, bottom: 20, right: 100, top: 10 }
const chartWidth = width - margin.left - margin.right
const chartHeight = height - margin.top - margin.bottom

const colors = {
    Curiosity: {
        light: '#4de0cd',
        dark: '#00bfa5'
    },
    Opportunity: {
        light: '#66ade4',
        dark: '#216ba5'
    },
    Spirit: {
        light: '#d36ae6',
        dark: '#9c27b0'
    }
}

const parseData = (data: DataProps[]) => {
    const output = []
    for (let i = 0, l = data.length; i < l; i++) {
        const d = data[i],
            o: any = {}
        o.year = new Date(d.Year, 0)
        for (const col in d) {
            if (col !== 'Year') o[col] = +d[col]
        }
        output.push(o)
    }
    return output
}

interface LineDataProps extends DataProps {
    year: number
}

const parseLineData = (data: LineDataProps[]) => {
    const output = []
    let i = 0
    for (const col in data[0]) {
        if (i > 0) {
            const o = {
                key: col,
                light: colors[col].light,
                dark: colors[col].dark,
                data: []
            }
            for (let i0 = 0, l0 = data.length; i0 < l0; i0++) {
                const d0 = data[i0]
                o.data.push({
                    year: d0.year,
                    value: d0[col]
                })
            }
            output.push(o)
        }
        i++
    }
    return output
}

const parseFlatData = (data: LineDataProps[]) => {
    const output: any = []
    const columns = []
    let i = 0
    for (const col in data[0]) {
        columns.push(col)
        if (i > 0) {
            for (let i0 = 0, l0 = data.length; i0 < l0; i0++) {
                const d0 = data[i0]
                output.push({
                    year: d0.year,
                    value: d0[col],
                    key: col,
                    colors: colors[col]
                })
            }
        }
        i++
    }
    output.columns = columns
    return output
}

const parseVoronoiData = (flatData, xScale, yScale) => {
    const v = [
        ...new d3.Delaunay(
            flatData.map(d => [xScale(d.year), yScale(d.value)]).flat()
        )
            .voronoi([0, 0, chartWidth, chartHeight])
            .cellPolygons()
    ]
    for (let i = 0, l = v.length; i < l; i++) {
        v[i].data = flatData[i]
    }
    return v
}

const parseLargestVoronoi = (flatData, voronoiData, xScale, yScale) => {
    const output = {}
    for (let i = 1, l = flatData.columns.length; i < l; i++) {
        output[flatData.columns[i]] = { area: 0 }
    }

    for (let i = 0, l = voronoiData.length; i < l; i++) {
        const cell = voronoiData[i]
        const area = geometric.polygonArea(cell)
        const key = cell.data.key

        if (area > output[key].area) {
            output[key].centroid = geometric.polygonCentroid(cell)
            output[key].point = [
                xScale(cell.data.year),
                yScale(cell.data.value)
            ]
            output[key].angle = geometric.lineAngle([
                output[key].point,
                output[key].centroid
            ])
            output[key].area = area
            output[key].polygon = cell
            output[key].colors = colors[key]
        }
    }
    const output2 = []
    for (const key in output) {
        output[key].key = key
        output2.push(output[key])
    }
    return output2
}

const last = array => array[array.length - 1]

const LineGraph: React.FC = () => {
    const canvasRef = useRef()

    function drawLineGraph () {
        const svg = d3
            .select(canvasRef.current)
            .append('svg')
            .attr('width', width)
            .attr('height', height)

        const xScale = d3
            .scaleTime()
            .domain([new Date(2004, 0), new Date(2020, 0)])
            .range([0, chartWidth])

        const yScale = d3
            .scaleLinear()
            .domain([0, 90000])
            .range([chartHeight, 0])

        const xAxisGenerator = d3
            .axisBottom(xScale)
            .tickValues(d3.range(2004, 2020).map(y => new Date(y, 0)))

        const yAxisGenerator = d3
            .axisLeft(yScale)
            .tickValues(d3.range(0, 90001, 10000))

        const lineGenerator = d3
            .line()
            .x(d => xScale(d.year))
            .y(d => yScale(d.value))

        const data = parseData(yearlyData)
        const lineData = parseLineData(data)
        const flatData = parseFlatData(data)
        const voronoiData = parseVoronoiData(flatData, xScale, yScale)
        const largestVoronoiData = parseLargestVoronoi(
            flatData,
            voronoiData,
            xScale,
            yScale
        )

        const g = svg
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

        g.append('g')
            .call(xAxisGenerator)
            .attr('transform', `translate(0, ${chartHeight})`)

        g.append('g').call(yAxisGenerator)

        g.selectAll('.line')
            .data(lineData)
            .enter()
            .append('path')
            .attr('d', d => lineGenerator(d.data))
            .style('fill', 'none')
            .style('stroke', d => d.light)
            .style('stroke-width', 2)
            .style('stroke-linejoin', 'round')

        const valueLabel = g
            .selectAll('.label')
            .data(lineData)
            .enter()
            .append('g')
            .attr('class', 'label')
            .attr('transform', d => `translate(${xScale(last(d.data).year)}, ${yScale(last(d.data).value)})`) // prettier-ignore

        valueLabel
            .append('circle')
            .attr('r', 4)
            .style('stroke', 'white')
            .style('fill', d => d.light)

        valueLabel
            .append('text')
            .text(d => last(d.data).value)
            .attr('dy', 5)
            .attr('dx', 10)
            .style('font-family', 'Montserrat')
            .style('fill', d => d.dark)

        g.selectAll('.line-label')
            .data(largestVoronoiData)
            .enter()
            .append('text')
            .text(d => d.key)
            .attr('transform', d => `translate(${d.point})`)
            .style('font-family', 'Montserrat')
            .style('text-anchor', 'middle')
            .style('font-weight', '600')
            .style('fill', d => d.colors.dark)
            .each((d, i, e) => {
                const newD = Object.assign({}, d)
                // prettier-ignore
                function somePointsInLine () {
                    const { width: labelWidth, height: labelHeight } = e[i].getBoundingClientRect()
                       const labelPadding = 5
                       const labelLeft = -labelPadding + newD.point[0] - labelWidth / 2
                       const labelRight = labelPadding + newD.point[0] + labelWidth / 2
                       const labelTop = -6 + -labelPadding + newD.point[1] - labelHeight / 2
                       const labelBottom = -6 + labelPadding + newD.point[1] + labelHeight / 2
                       const labelRect = [
                            [labelLeft, labelTop],
                            [labelRight, labelTop],
                            [labelRight, labelBottom],
                            [labelLeft, labelBottom]
                        ]

                    return flatData.some(d0 =>
                        geometric.pointInPolygon(
                            [xScale(d0.year), yScale(d0.value)],
                            labelRect
                        )
                    )
                }

                let i0 = 1
                const iMax = 50

                while (somePointsInLine() && i0 < iMax) {
                    newD.point = geometric.pointTranslate(d.point, d.angle, i0)
                    d3.select(e[i]).attr(
                        'transform',
                        `translate(${newD.point})`
                    )
                    i0++
                }
            })
        return svg.node()
    }

    useEffect(() => {
        drawLineGraph()
    }, [])

    return <div className='line-graph' ref={canvasRef}></div>
}

export default LineGraph
