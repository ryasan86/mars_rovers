import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Photos from './pages/Photos'
import { RoverProps, ContextProps } from './interfaces'
import { rootPath } from './constants'

export const Context = React.createContext<ContextProps>(null)

const App: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<string | Date>()
    const [selectedRover, setSelectedRover] = useState<RoverProps | null>(null)

    const onToggleSidebar = () => setSidebarOpen(prev => !prev)
    const onSelectDate = (date: string) => setSelectedDate(date) // prettier-ignore
    const onSelectRover = (rover: RoverProps) => setSelectedRover(rover)

    return (
        <BrowserRouter>
            <Context.Provider
                value={{
                    sidebarOpen,
                    selectedDate,
                    selectedRover,
                    onToggleSidebar,
                    onSelectDate,
                    onSelectRover
                }}>
                <Route
                    render={({ location }) => (
                        <Switch location={location}>
                            <Route component={Home} path={rootPath} exact />
                            <Route component={Photos} path={rootPath + 'photos'} />
                        </Switch>
                    )}
                />
            </Context.Provider>
        </BrowserRouter>
    )
}

export default App
