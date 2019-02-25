import { selectRover, storePhotos, selectDateFilter, selectCameraFilter } from './roverActions';
import { startLoading, stopLoading, toggleSidebar } from './uiActions';

export const actionCreators = {
  selectRover,
  storePhotos,
  selectDateFilter,
  selectCameraFilter,
  startLoading,
  stopLoading,
  toggleSidebar
};
