import React, { Component } from 'react';
import {Button} from 'antd';
import {withRouter} from "react-router-dom"
class App extends Component {
    constructor(props) {
        super(props);
    }
    handleLogin = () => {
        this.props.history.push(`/`)
    }
    render() {
        return (
            <div className="Login">
                <h1>我是登录页</h1>
                <Button type="primary" onClick={this.handleLogin}>登录</Button>
            </div>
        );
    }
}

export default withRouter(App);
