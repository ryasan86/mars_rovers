export interface RoverProps {
    name: string
    minPhotoDate: string
    maxPhotoDate: string
    selected: boolean
}

export interface PhotoProps {
    id: number
    img_src: string
    earth_date: string
    sol: number
    camera: {
        id: number
        rover_id: number
        full_name: string
        name: string
    }
    rover: {
        id: number
        name: string
        landing_date: string
        status: string
    }
}

export interface DataProps {
    selectedDate: Date | null
    selectedCamera: string
    photos: PhotoProps[]
    filteredPhotos: PhotoProps[]
    roverList: Array<{ rover: RoverProps }>
}

export interface UiProps {
    sidebarIsOpen: boolean
    loading: boolean
}

export interface ReduxProps {
    actions: Record<string, (arg?: unknown) => void>
    ui: UiProps
    data: DataProps
}

export interface ActionProps {
    type: string
    payload?: Record<string, unknown>
}
