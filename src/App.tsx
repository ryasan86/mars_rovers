import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Photos from './pages/Photos'
import { RoverProps } from './interfaces'

export const Context = React.createContext(null)

const App: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const [selectedRover, setSelectedRover] = useState<RoverProps | null>(null)

    // prettier-ignore
    return (
        <BrowserRouter>
            <Context.Provider
                value={{
                    sidebarOpen,
                    selectedDate,
                    selectedRover,
                    onToggleSidebar: () => setSidebarOpen(prev => !prev),
                    onSelectDate: (date: string) => setSelectedDate(date),
                    onSelectRover: (rover: RoverProps): void => setSelectedRover(rover)
                }}>
                <div className='app'>
                    <Route
                        render={({ location }) => (
                            <Switch location={location}>
                                <Route component={Home} path='/' exact />
                                <Route component={Photos} path='/photos' />
                            </Switch>
                        )}
                    />
                </div>
            </Context.Provider>
        </BrowserRouter>
    )
}

export default App
