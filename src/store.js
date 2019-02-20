import { createStore } from 'redux';
import { combineReducers } from 'redux';
import rover from './reducers/rover';
import ui from './reducers/ui';

export default createStore(combineReducers({ rover, ui }));
