import { useState, useEffect } from 'react'

export const baseUrl = 'https://api.nasa.gov'
export const apiKey = process.env.REACT_APP_API_KEY

interface ResponseProps {
    data: Record<string, unknown>
    loading: boolean
    error: unknown
}

export const useCustomQuery = ({ query }: { query: string }): ResponseProps => {
    const [{ data, loading, error }, setState] = useState({
        data: null,
        loading: false,
        error: null
    })

    useEffect(() => {
        setState(prev => ({ ...prev, loading: true }))
        fetch(query)
            .then(res => res.json())
            .then(data => setState(prev => ({ ...prev, data, loading: false })))
            .catch(error => setState(prev => ({ ...prev, error })))
    }, [])

    return { data, loading, error }
}

// export const getRoverPhotos = (
//     query: { name: string; date: string },
//     successCb: (arg: unknown) => void
// ): void => {
//     const { name, date } = query

//     fetch(`${baseUrl}/mars-photos/api/v1/rovers/${name}/photos?earth_date=${formatEarthDate(date)}&api_key=${process.env.REACT_APP_API_KEY}`) // prettier-ignore
//         .then(res => res.json())
//         .then(successCb)
//         .catch(err => console.error(err))
// }
