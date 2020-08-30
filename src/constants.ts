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
]

const BASE_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers'
const GITHUB_REPO_URL = 'https://github.com/ryasan86/mars_rovers'

export { BASE_API_URL, CAMERAS, GITHUB_REPO_URL }
