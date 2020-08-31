import { BASE_API_URL } from './constants'
import { formatEarthDate } from './utils'

export default {
    getRoverPhotos: (
        query: { name: string; date: Date },
        successCb: (arg: unknown) => void
    ): void => {
        const { name, date } = query
        const url = BASE_API_URL
        const apiKey = process.env.REACT_APP_API_KEY
        const earthDate = formatEarthDate(date)

        fetch(`${url}/${name}/photos?earth_date=${earthDate}&api_key=${apiKey}`)
            .then(res => res.json())
            .then(successCb)
            .catch(err => console.error(err))
    }
}
