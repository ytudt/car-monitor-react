import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
class App extends Component {
    render() {
        return (
            <div className="Login">
                <h1>我是主页</h1>
            </div>
        );
    }
}

export default withRouter(App);
