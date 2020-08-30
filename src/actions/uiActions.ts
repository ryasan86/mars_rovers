import { START_LOADING, STOP_LOADING, TOGGLE_SIDEBAR } from './types'
import { createAction } from '../utils'

const startLoading = () => createAction(START_LOADING)
const stopLoading = () => createAction(STOP_LOADING)
const toggleSidebar = () => createAction(TOGGLE_SIDEBAR)

export { startLoading, stopLoading, toggleSidebar }
