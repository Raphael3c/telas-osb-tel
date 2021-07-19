import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ChangePhone } from 'features/account/pages/ChangePhone'


export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ChangePhone}/>        
      </Switch>
    </BrowserRouter>
  )
}