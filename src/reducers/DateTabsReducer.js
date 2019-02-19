import moment from 'moment';

import { ACTIVE_DATE } from './../actions/types';

const INITIAL_STATE = [
  {
    id: 0,
    title: 'Today',
    date: moment(),
    active: false
  },
  {
    id: 1,
    title: 'Yesterday',
    date: moment().subtract(1, 'days'),
    active: false
  },
  {
    id: 2,
    title: 'Two Days Ago',
    date: moment().subtract(2, 'days'),
    active: false
  }
];

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIVE_DATE:
      return state.map(d => ({
        ...d,
        active: payload.id === d.id
      }));
    default:
      return state;
  }
};
