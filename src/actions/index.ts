import { startLoading, stopLoading, toggleSidebar } from './uiActions'

import {
    selectRover,
    storePhotos,
    selectDateFilter,
    selectCameraFilter
} from './roverActions'

// import { SELECT_ROVER, STORE_PHOTOS, SELECT_DATE, SELECT_CAMERA } from './types'
// import { createAction } from '../utils'

// const selectRover = payload => createAction(SELECT_ROVER, payload)
// const selectDateFilter = payload => createAction(SELECT_DATE, payload)
// const selectCameraFilter = payload => createAction(SELECT_CAMERA, payload)
// const storePhotos = payload => createAction(STORE_PHOTOS, payload)


export const actionCreators = {
    selectRover,
    storePhotos,
    selectDateFilter,
    selectCameraFilter,
    startLoading,
    stopLoading,
    toggleSidebar
}
