import { RoverProps } from './interfaces'

export const baseUrl = 'https://api.nasa.gov'
export const apiKey = process.env.REACT_APP_API_KEY
export const rootPath = process.env.NODE_ENV === 'development' ? '/' : '/mars_rovers/'

export const roverMap = {
    curiosity: {
        name: 'curiosity',
        minPhotoDate: '2012-8-6',
        maxPhotoDate: '2019-2-14',
        selected: false
    } as RoverProps,

    opportunity: {
        name: 'opportunity',
        minPhotoDate: '2004-1-25',
        maxPhotoDate: '2018-6-11',
        selected: false
    } as RoverProps,

    spirit: {
        name: 'spirit',
        minPhotoDate: '2004-1-4',
        maxPhotoDate: '2010-3-21',
        selected: false
    } as RoverProps
}

export const roverList: Array<{ rover: RoverProps }> = Object.values(
    roverMap
).map(value => ({ rover: value }))
