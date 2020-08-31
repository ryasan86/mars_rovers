import { createStore } from 'redux'
import { combineReducers } from 'redux'
import app from './reducers'

export default createStore(
    combineReducers({ data: app.dataReducer, ui: app.uiReducer })
)
