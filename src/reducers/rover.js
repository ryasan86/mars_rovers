import {
  SELECT_ROVER,
  STORE_PHOTOS,
  SELECT_DATE,
  SELECT_CAMERA
} from './../actions/types';
import { DATE_RANGES } from './../constants';

const INITIAL_STATE = {
  selectedRover: 'curiosity',
  selectedDate: new Date(DATE_RANGES.curiosity.maxPhotoDate),
  selectedCamera: 'All',
  photos: []
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_ROVER:
      return { ...state, selectedRover: payload.rover };
    case SELECT_DATE:
      return { ...state, selectedDate: payload.date };
    case SELECT_CAMERA:
      return { ...state, selectedCamera: payload.camera };
    case STORE_PHOTOS:
      return { ...state, photos: payload.photos };
    default:
      return state;
  }
};
