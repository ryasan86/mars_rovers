import { BASE_API_URL } from './constants';
import { API_KEY } from './constants';
import { formatEarthDate } from "./utils";

export default {
  getRoverPhotos(query, successCb) {
    const { name, date } = query;
    fetch(`${BASE_API_URL}/${name}/photos?earth_date=${formatEarthDate(date)}&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(successCb).catch(err => console.error(err));
  }
};
