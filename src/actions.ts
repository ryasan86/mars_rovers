export const SELECT_ROVER = 'select_rover'
export const SELECT_DATE = 'select_date'
export const SELECT_CAMERA = 'select_camera'
export const STORE_PHOTOS = 'store_photos'
export const START_LOADING = 'start_loading'
export const STOP_LOADING = 'stop_loading'
export const TOGGLE_SIDEBAR = 'toggle_sidebar'

const selectRover = (payload: unknown): Record<string, unknown> => {
    return { type: SELECT_ROVER, payload }
}

const selectDateFilter = (payload: unknown): Record<string, unknown> => {
    return { type: SELECT_DATE, payload }
}

const selectCameraFilter = (payload: unknown): Record<string, unknown> => {
    return { type: SELECT_CAMERA, payload }
}

const storePhotos = (payload: unknown): Record<string, unknown> => {
    return { type: STORE_PHOTOS, payload }
}

const startLoading = (): Record<string, unknown> => {
    return { type: START_LOADING }
}

const stopLoading = (): Record<string, unknown> => {
    return { type: STOP_LOADING }
}

const toggleSidebar = (): Record<string, unknown> => {
    return { type: TOGGLE_SIDEBAR }
}

export const actionCreators = {
    selectRover,
    selectDateFilter,
    selectCameraFilter,
    storePhotos,
    startLoading,
    stopLoading,
    toggleSidebar
}
