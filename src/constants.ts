import moment from 'moment'
import { RoverProps } from './interfaces'

export const baseUrl = 'https://api.nasa.gov'
export const apiKey = process.env.REACT_APP_API_KEY
export const rootPath = process.env.NODE_ENV === 'development' ? '/' : '/mars_rovers/' // prettier-ignore

export const roverMap = {
    curiosity: {
        name: 'curiosity',
        minPhotoDate: '2012-8-6',
        maxPhotoDate: moment(Date.now())
            .subtract(3, 'days')
            .format('YYYY-M-D')
    } as RoverProps,

    opportunity: {
        name: 'opportunity',
        minPhotoDate: '2004-1-25',
        maxPhotoDate: '2018-6-11',
        totalPhotos: 198439
    } as RoverProps,

    spirit: {
        name: 'spirit',
        minPhotoDate: '2004-1-4',
        maxPhotoDate: '2010-3-21',
        totalPhotos: 124550
    } as RoverProps
}

export const roverList: Array<{ rover: RoverProps }> = Object.values(
    roverMap
).map(value => ({ rover: value }))
