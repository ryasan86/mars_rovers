import { useState, useEffect, useCallback } from 'react'
import { ResponseProps } from './interfaces'

export const baseUrl = 'https://api.nasa.gov'
export const apiKey = process.env.REACT_APP_API_KEY

export const useCustomQuery = ({ query }: { query: string }): ResponseProps => {
    const [{ data, loading, error }, setState] = useState({
        data: {},
        loading: false,
        error: null
    })

    // prettier-ignore
    const refetch = (): void => {
        fetch(query)
            .then(res => res.json())
            .then(data => setState(prev => ({ ...prev, data, loading: false })))
            .catch(error => setState(prev => ({ ...prev, error })))
    }

    useEffect(() => refetch(), [])

    return {
        data,
        loading,
        error,
        refetch
    }
}
