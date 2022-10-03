
import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import Home from './Home'

const Routes = () => (
  <Switch>
    <Route path='/' element={<Home />} />
  </Switch>
  
)

export default Routes