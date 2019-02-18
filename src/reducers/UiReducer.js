import { TOGGLE_SIDEBAR } from './../actions/types';

const INITIAL_STATE = {
  sidebarIsOpen: true
};
export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarIsOpen: !state.sidebarIsOpen };
    default:
      return state;
  }
};
