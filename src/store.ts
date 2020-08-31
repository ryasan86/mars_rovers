import { createStore, combineReducers } from 'redux'

import { DataProps, UiProps, ActionProps } from './interfaces'

export const SELECT_ROVER = 'select_rover'
export const SELECT_DATE = 'select_date'
export const SELECT_CAMERA = 'select_camera'
export const STORE_PHOTOS = 'store_photos'
export const START_LOADING = 'start_loading'
export const STOP_LOADING = 'stop_loading'
export const TOGGLE_SIDEBAR = 'toggle_sidebar'

const rovers = [
    {
        name: 'curiosity',
        minPhotoDate: '2012-8-6',
        maxPhotoDate: '2019-2-14',
        selected: false
    },
    {
        name: 'opportunity',
        minPhotoDate: '2004-1-25',
        maxPhotoDate: '2018-6-11',
        selected: false
    },
    {
        name: 'spirit',
        minPhotoDate: '2004-1-4',
        maxPhotoDate: '2010-3-21',
        selected: false
    }
]

const DATA_INITIAL_STATE = {
    selectedDate: null,
    selectedCamera: 'All',
    photos: [],
    filteredPhotos: [],
    rovers
}

const UI_INITIAL_STATE = {
    sidebarIsOpen: false,
    loading: false
}

export default createStore(
    combineReducers({
        data: (
            state: DataProps = DATA_INITIAL_STATE,
            action: ActionProps
        ): unknown => {
            const { type, payload } = action
            switch (type) {
                case STORE_PHOTOS:
                    return {
                        ...state,
                        photos: payload.photos,
                        filteredPhotos: payload.photos
                    }
                case SELECT_ROVER:
                    return {
                        ...state,
                        rovers: state.rovers.map((rover, idx) => ({
                            ...rover,
                            selected: idx === payload.idx
                        }))
                    }
                case SELECT_DATE:
                    return { ...state, selectedDate: payload.date }
                case SELECT_CAMERA:
                    return {
                        ...state,
                        selectedCamera: payload.camera,
                        filteredPhotos: state.photos.filter(({ camera }) => {
                            return (
                                camera.name === payload.camera ||
                                payload.camera === 'All'
                            )
                        })
                    }
                default:
                    return state
            }
        },
        ui: (
            state: UiProps = UI_INITIAL_STATE,
            action: ActionProps
        ): unknown => {
            const { type } = action
            switch (type) {
                case TOGGLE_SIDEBAR:
                    return { ...state, sidebarIsOpen: !state.sidebarIsOpen }
                case START_LOADING:
                    return { ...state, loading: true }
                case STOP_LOADING:
                    return { ...state, loading: false }
                default:
                    return state
            }
        }
    })
)
