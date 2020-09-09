import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import * as geometric from 'geometric'
import * as arr from 'arraygeous'

import {
    curiosityManifest,
    opportunityManifest,
    spiritManifest,
    fruits
} from '../../data'
import './LineGraph.scss'

interface Fruit {
    Date: string
    Apples: string
    Blueberries: string
    Carrots: string
}

interface ManifestProps {
    sol: number
    earth_date: string
    total_photos: number
}

const manifests: Array<{ name: string; data: ManifestProps[] }> = [
    {
        name: 'curiosity',
        data: curiosityManifest
    },
    {
        name: 'opportunity',
        data: opportunityManifest
    },
    {
        name: 'spirit',
        data: spiritManifest
    }
]

interface YearProps {
    Curiosity?: number
    Opportunity?: number
    Spirit?: number
}

const parseYearlyData = (): DataProps[] => {
    const map: { [date: string]: YearProps } = {}
    // prettier-ignore
    manifests.forEach(manifest => {
        manifest.data.forEach(m => {
            const date = m.earth_date
            const dateExists = map[date]
            const roverExists = map[date]?.[manifest.name]

            if (!dateExists) {
                map[date] = { [manifest.name]: m.total_photos }
            } else if (!roverExists) {
                map[date] = { ...map[date], [manifest.name]: m.total_photos }
            } else if (roverExists) {
                map[date][manifest.name] += m.total_photos
            }
        })
    })

    return Object.entries(map).map(([date, rovers]) => ({
        Curiosity: rovers.Curiosity || 5,
        Opportunity: rovers.Opportunity || 5,
        Spirit: rovers.Spirit || 5,
        date
    }))
}

interface DataProps {
    date: string
    Curiosity?: number
    Opportunity?: number
    Spirit?: number
}

const parseData = (data: Fruit[]) => {
    const output = []
    for (let i = 0, l = data.length; i < l; i++) {
        const d = data[i]
        const o = { date: null }
        const s: string[] = d.Date.split('/')
        const yyyy = +('20' + s[2])
        const mm = +s[0] - 1
        const dd = +s[1]

        o.date = new Date(yyyy, mm, dd)

        for (const col in d) {
            if (col !== 'Date') {
                o[col] = +d[col]
            }
        }
        output.push(o)
    }
    return output
}

const data = parseData(fruits)

interface FruitData {
    date: string
    Apples: number
    Blueberries: number
    Carrots: number
}

const parseLineData = (data: FruitData[]) => {
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
                    date: d0.date,
                    value: d0[col]
                })
            }
            output.push(o)
        }
        i++
    }
    return output
}

const parseFlatData = data => {
    const output: any = []
    const columns = []
    let i = 0
    for (const col in data[0]) {
        columns.push(col)
        if (i > 0) {
            for (let i0 = 0, l0 = data.length; i0 < l0; i0++) {
                const d0 = data[i0]
                output.push({
                    date: d0.date,
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

const last = array => array[array.length - 1]

const height = 477
const width = 874
const margin = { left: 20, bottom: 20, right: 60, top: 10 }
const colors = {
    Apples: {
        light: '#3dcde0',
        dark: '#00bfa5'
    },
    Blueberries: {
        light: '#4481af',
        dark: '#216ba5'
    },
    Carrots: {
        light: '#b748ca',
        dark: '#9c27b0'
    }
}

const BarChart: React.FC = () => {
    const canvasRef = useRef()

    const drawLineGraph = () => {
        const svg = d3
            .select(canvasRef.current)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('border', '1px solid white')

        const xScale = d3
            .scaleTime()
            .domain([new Date(2010, 0, 1), new Date(2010, 3, 1)])

        const yScale = d3
            .scaleLinear()
            .domain([0, 20])
            .range([height, 0])
            .range([0, width])

        const xAxisGenerator = d3
            .axisBottom(xScale)
            .tickValues(d3.range(0, 4).map(d => new Date(2010, d, 1)))

        const yAxisGenerator = d3
            .axisLeft(yScale)
            .tickValues(d3.range(0, 30, 5))

        const lineData = parseLineData(data)

        const lineGenerator = d3
            .line()
            .x(d => xScale(d.date))
            .y(d => yScale(d.value))

        const g = svg
            .append('g')
            .call(xAxisGenerator)
            .attr('transform', `translate(0, ${height})`)

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
            .attr('transform', d => `translate(${xScale(last(d.data).date)}, ${yScale(last(d.data).value)})`) // prettier-ignore

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
            .style('font-family', 'monospace')
            .style('fill', d => d.dark)

        const parseLargestVoronoi = (flatData, voronoiData) => {
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
                        xScale(cell.data.date),
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

        const flatData = parseFlatData(data)

        const voronoiData = flatData => {
            const v = [
                ...new d3.Delaunay(
                    arr.flatten(
                        flatData.map(d => [xScale(d.date), yScale(d.value)])
                    )
                )
                    .voronoi([0, 0, width, height])
                    .cellPolygons()
            ]

            for (let i = 0; i < v.length; i++) {
                v[i].data = flatData[i]
            }
            return v
        }

        const voronoi = voronoiData(flatData)

        const largestVoronoiData = parseLargestVoronoi(flatData, voronoi)

        return svg.node()
    }

    useEffect(() => {
        drawLineGraph()
    }, [])

    return <div className='line-graph' ref={canvasRef}></div>
}

export default BarChart
