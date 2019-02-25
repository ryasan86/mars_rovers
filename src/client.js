import { BASE_API_URL } from './constants';
import { API_KEY } from './constants';
import { formatEarthDate } from "./utils";

export default {
  getRoverPhotos(query, successCb) {
    const { name, date } = query;
    fetch(`${BASE_API_URL}/${name}/photos?earth_date=${formatEarthDate(date)}&api_key=${API_KEY}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(successCb);
  }
};

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    const error = new Error(`HTTP Error ${res.statusText}`);
    error.status = res.statusText;
    error.response = res;
    console.error(error);
    throw error;
  }
};

const parseJSON = res => {
  return res.json();
};
