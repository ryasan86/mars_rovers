import moment from 'moment'

const formatEarthDate = (date: string | Date): string | Date => {
    return moment(date).format('YYYY-M-D')
}

export { formatEarthDate }
