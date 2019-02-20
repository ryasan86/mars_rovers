import {
  SELECT_ROVER,
  STORE_PHOTOS,
  SELECT_DATE,
  START_LOADING,
  STOP_LOADING,
  TOGGLE_SIDEBAR
} from './types';
import { createAction } from './../utils';

const selectRover   = payload => createAction(SELECT_ROVER, payload);
const setDateFilter = payload => createAction(SELECT_DATE, payload);
const storePhotos   = payload => createAction(STORE_PHOTOS, payload);
const startLoading  = () => createAction(START_LOADING);
const stopLoading   = () => createAction(STOP_LOADING);
const toggleSidebar = () => createAction(TOGGLE_SIDEBAR);


export const actionCreators = {
  selectRover,
  storePhotos,
  setDateFilter,
  startLoading,
  stopLoading,
  toggleSidebar
};
