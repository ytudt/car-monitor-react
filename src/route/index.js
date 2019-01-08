import React from 'react';
import {Switch} from 'react-router-dom'
import AuthorizedRoute from './auth.js'
import Main from '../view/main/index.js';

const main = {
  height: '100%',
}
const Routes = () => (
  <main style={main}>
    <Switch>
      <AuthorizedRoute path="/" component={Main}/>
    </Switch>
  </main>
)

export default Routes;
