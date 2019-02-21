const ROVERS = ['curiosity', 'opportunity', 'spirit'];

const DATE_RANGES = {
  curiosity: {
    minPhotoDate: '2012-8-6',
    maxPhotoDate: '2019-2-14'
  },
  opportunity: {
    minPhotoDate: '2004-1-25',
    maxPhotoDate: '2018-6-11'
  },
  spirit: {
    minPhotoDate: '2004-1-4',
    maxPhotoDate: '2010-3-21'
  }
};

const CAMERAS = [
  {
    abbrev: 'FHAZ',
    fullName: 'Front Hazard Avoidance Camera'
  },
  {
    abbrev: 'RHAZ',
    fullName: 'Rear Hazard Avoidance Camera'
  },
  {
    abbrev: 'MAST',
    fullName: 'Mast Camera'
  },
  {
    abbrev: 'CHEMCAM',
    fullName: 'Chemistry and Camera Complex'
  },
  {
    abbrev: 'MAHLI',
    fullName: 'Mars Hand Lens Imager'
  },
  {
    abbrev: 'MARDI',
    fullName: 'Mars Descent Imager'
  },
  {
    abbrev: 'NAVCAM',
    fullName: 'Navigation Camera'
  },
  {
    abbrev: 'PANCAM',
    fullName: 'Panoramic Camera'
  },
  {
    abbrev: 'MINITES',
    fullName: 'Miniature Thermal Emission Spectrometer'
  }
];

const API_KEY = 'ckPZgbeexCCXZb1IOIPsmugP5Uq3rowfH86GI6qM';
const BASE_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const GITHUB_REPO_URL = 'https://github.com/ryasan86/mars_rovers';

export { BASE_API_URL, ROVERS, DATE_RANGES, CAMERAS, API_KEY, GITHUB_REPO_URL };
