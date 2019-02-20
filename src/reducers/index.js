import { combineReducers } from 'redux';
import rover from './rover';
import ui from './ui';

export default combineReducers({ rover, ui });
