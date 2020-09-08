import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

import {
    curiosityManifest,
    opportunityManifest,
    spiritManifest
} from '../../data/index'
import './BarChart.scss'

// prettier-ignore
const Legend = () => (
    <ul className='bar-chart__legend'>
        <li className='bar-chart__legend-item bar-chart__legend-item--curiosity'></li>
        <li className='bar-chart__legend-item bar-chart__legend-item--opportunity'></li>
        <li className='bar-chart__legend-item bar-chart__legend-item--spirit'></li>
    </ul>
)

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
    curiosity?: number
    opportunity?: number
    spirit?: number
}

const getYearlyData = (): DataProps[] => {
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
        curiosity: rovers.curiosity || 0,
        opportunity: rovers.opportunity || 0,
        spirit: rovers.spirit || 0,
        year: +year
    }))
}

const data = getYearlyData()

console.log(data)

const width = 960
const height = 500
const margin = { top: 10, right: 10, bottom: 20, left: 40 }

interface DataProps {
    year: number
    curiosity?: number
    opportunity?: number
    spirit?: number
}

interface LayerProps {
    x: number
    y: number
}

const formatValue = x => (isNaN(x) ? 'N/A' : x.toLocaleString('en'))

const BarChart: React.FC = () => {
    const canvasRef = useRef()

    const drawBarCharts = (data: DataProps[]) => {
        const svg = d3
            .select(canvasRef.current)
            .append('svg')
            .attr('width', width)
            .attr('height', height)

        const series = d3
            .stack()
            .keys(['curiosity', 'opportunity', 'spirit'])(data)
            .map(d => (d.forEach(v => (v.key = d.key)), d)) // eslint-disable-line

        const x = d3
            .scaleBand()
            .domain(data.map(d => d.year))
            .range([margin.left, width - margin.right])
            .padding(0.1)

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
            .rangeRound([height - margin.bottom, margin.top])

        svg.append('g')
            .selectAll('g')
            .data(series)
            .join('g')
            .selectAll('rect')
            .data(d => d)
            .join('rect')
            .attr('class', d => `bar-chart__bar bar-chart__bar--${d.key}`)
            .attr('x', d => x(d.data.year))
            .attr('y', d => y(d[1]))
            .attr('height', d => y(d[0]) - y(d[1]))
            .attr('width', x.bandwidth())
            .append('title')
            .text(d => `${d.data.year} ${d.key} ${formatValue(d.data[d.key])}`)

        const xAxis = g =>
            g
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x).tickSizeOuter(0))
                .call(g => g.selectAll('.domain').remove())

        const yAxis = g =>
            g
                .attr('transform', `translate(${margin.left}, 0)`)
                .call(d3.axisLeft(y).ticks(null, 's'))
                .call(g => g.selectAll('.domain').remove())

        svg.append('g').call(xAxis)
        svg.append('g').call(yAxis)

        return svg.node()
    }

    useEffect(() => {
        drawBarCharts(data)
    }, [])

    return (
        <div className='bar-chart' ref={canvasRef}>
            <Legend />
        </div>
    )
}

export default BarChart
