import moment from 'moment'

const formatEarthDate = (date: string): string => {
    return moment(date).format('YYYY-M-D')
}

export { formatEarthDate }
