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

export interface ResponseProps {
    data: { photos?: PhotoProps[] } | undefined
    loading: boolean
    error: unknown | null
    refetch: () => void
}
