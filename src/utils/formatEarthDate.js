import moment from 'moment';

const formatEarthDate = (date = new Date()) => {
  return moment(date).format('YYYY-MM-DD');
};

export { formatEarthDate };
