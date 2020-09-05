import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Photos from './pages/Photos'
import { RoverProps, ContextProps } from './interfaces'
import { rootPath, roverMap, apiKey } from './constants'
import { useCustomQuery } from './client'

export const Context = React.createContext<ContextProps>(null)

const App: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<string | Date>()
    const [selectedRover, setSelectedRover] = useState<RoverProps | null>(null)
    const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(null)

    const onToggleSidebar = () => setSidebarOpen(prev => !prev)
    const onSelectDate = (date: string) => setSelectedDate(date) // prettier-ignore
    const onSelectRover = (rover: RoverProps) => setSelectedRover(rover)
    const onSelectPhotoIdx = (cb: (arg: number) => number) => setSelectedPhotoIdx(cb)

    const { data, loading } = useCustomQuery({
        query: `https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${apiKey}`
    })

    useEffect(() => {
        if (data.photo_manifest) {
            roverMap.curiosity.totalPhotos = data.photo_manifest.total_photos
        }
    }, [data])

    return (
        <BrowserRouter>
            <Context.Provider
                value={{
                    sidebarOpen,
                    selectedDate,
                    selectedRover,
                    selectedPhotoIdx,
                    onToggleSidebar,
                    onSelectDate,
                    onSelectRover,
                    onSelectPhotoIdx,
                    loadingManifest: loading
                }}>
                <Route
                    render={({ location }) => (
                        <Switch location={location}>
                            <Route component={Home} path={rootPath} exact />
                            <Route
                                component={Photos}
                                path={rootPath + 'photos'}
                            />
                        </Switch>
                    )}
                />
            </Context.Provider>
        </BrowserRouter>
    )
}

export default App
