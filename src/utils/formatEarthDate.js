import moment from 'moment';

const formatEarthDate = (date = new Date()) => {
  return moment(date).format('YYYY-M-D');
};

export { formatEarthDate };
