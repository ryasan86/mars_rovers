import { TOGGLE_SIDEBAR, START_LOADING, STOP_LOADING } from '../actions/types'

const INITIAL_STATE = {
    sidebarIsOpen: false,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
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
