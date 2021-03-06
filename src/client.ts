import { useState, useEffect, useCallback } from 'react'

import { ResponseProps } from './interfaces'

export const useCustomQuery = ({ query }: { query: string }): ResponseProps => {
    const [{ data, loading, error }, setState] = useState({
        data: { photos: null, photo_manifest: null },
        loading: false,
        error: null
    })

    // prettier-ignore
    const refetch = useCallback((): void => {
        setState(prev => ({ ...prev, loading: true }))
        fetch(query)
            .then(res => res.json())
            .then(data => setState(prev => ({ ...prev, data, loading: false })))
            .catch(error => setState(prev => ({ ...prev, error })))
    }, [query])

    useEffect(() => refetch(), [refetch])

    return {
        data,
        loading,
        error,
        refetch
    }
}
