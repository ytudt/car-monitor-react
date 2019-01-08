import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";
import Cookies from 'js-cookie'
import Login from "../view/login/index.js"

class Auth extends Component {
  render() {
    const token = Cookies.get('token');
    const isLogin = !!token;
    let {component: Component, ...rest} = this.props;
    return (
      <Route {...rest} render={props => {
        const {location} = this.props;
        const isLoginPath = location.pathname === '/login';
        if (isLoginPath) {
          return isLogin ? <Redirect to="/"/> : <Login/>
        } else {
          return isLogin ? <Component {...this.props} /> : <Redirect to="/login"/>
        }
      }}>
      </Route>
    )
  }
}

export default Auth;
