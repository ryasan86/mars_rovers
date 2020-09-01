import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Photos from './pages/Photos/Photos'

const App: React.StatelessComponent = () => (
    <BrowserRouter>
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
    </BrowserRouter>
)

export default App
