import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Main from './pages/Main/Main'

const App: React.StatelessComponent = () => (
    <BrowserRouter>
        <div className='app'>
            <Route
                render={({ location }) => (
                    <Switch location={location} className='test'>
                        <Route component={Home} path='/' exact />
                        <Route component={Main} path='/main' />
                    </Switch>
                )}
            />
        </div>
    </BrowserRouter>
)

export default App
