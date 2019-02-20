import { combineReducers } from 'redux';
import RoverReducer from './RoverReducer';
import UiReducer from './UiReducer';

export default combineReducers({
  rover: RoverReducer,
  ui: UiReducer
});
