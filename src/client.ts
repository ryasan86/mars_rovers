import { useState, useEffect } from 'react'
import { ResponseProps } from './interfaces'

export const baseUrl = 'https://api.nasa.gov'
export const apiKey = process.env.REACT_APP_API_KEY

export const useCustomQuery = <T>({
    query
}: {
    query: string
}): T | ResponseProps => {
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
