import { selectRover, storePhotos, setDateFilter, setCameraFilter } from './roverActions';
import { startLoading, stopLoading, toggleSidebar } from './uiActions';

export const actionCreators = {
  selectRover,
  storePhotos,
  setDateFilter,
  setCameraFilter,
  startLoading,
  stopLoading,
  toggleSidebar
};
