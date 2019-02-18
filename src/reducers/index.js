import { combineReducers } from 'redux';
import RoverReducer from './RoverReducer';
import DateTabsReducer from './DateTabsReducer';
import UiReducer from './UiReducer';

export default combineReducers({
  rover: RoverReducer,
  dateTabs: DateTabsReducer,
  ui: UiReducer
});
