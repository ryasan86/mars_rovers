import { SELECT_ROVER, STORE_PHOTOS, SELECT_DATE } from './../constants';
import { createAction } from './../utils';

const selectRover   = payload => createAction(SELECT_ROVER, payload);
const setDateFilter = payload => createAction(SELECT_DATE, payload);
const storePhotos   = payload => createAction(STORE_PHOTOS, payload);

export { selectRover, storePhotos, setDateFilter };
