export interface RoverProps {
    name: string
    minPhotoDate: string
    maxPhotoDate: string
    totalPhotos: number | undefined
}

export interface PhotoManifestProps {
    name: string
    landing_date: string
    launch_date: string
    status: string
    max_sol: number
    max_date: string
    total_photos: number
    photos: {
        sol: number
        earth_date: string
        total_photos: number
        cameras: string[]
    }
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

export interface ResponseProps {
    data:
        | { photos?: PhotoProps[]; photo_manifest?: PhotoManifestProps | null }
        | undefined
    loading: boolean
    error: unknown | null
    refetch: () => void
}

export interface ContextProps {
    selectedCamera: string | null
    loadingManifest: boolean
    sidebarOpen: boolean
    selectedDate: string | Date
    selectedRover: RoverProps | null
    selectedPhotoIdx: number | null
    onToggleSidebar: () => void
    onSelectDate: (date: string | Date) => void
    onSelectRover: (rover: RoverProps) => void
    onSelectPhotoIdx: (any: (any: number) => number) => void
    onSelectCamera: (camera: string) => void
}
