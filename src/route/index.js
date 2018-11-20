import React from 'react';
import Index from '../view/Index';
import Login from '../view/Login';
import {Switch, Route} from 'react-router-dom'

const main = {
    height: '100%',
}
const Routes = () => (
    <main style={main}>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/' component={Index}/>
        </Switch>
    </main>
)

export default Routes;
