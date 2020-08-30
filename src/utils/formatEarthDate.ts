import moment from 'moment'

const formatEarthDate = (date = new Date()): string => {
    return moment(date).format('YYYY-M-D')
}

export { formatEarthDate }
