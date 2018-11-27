import React, { Component } from 'react';
import Cookies from 'js-cookie';
import {withRouter} from "react-router-dom";
import { Layout, Icon, Dropdown, Menu } from 'antd';
import './index.css'
import Map from './map/index.js';
const { Header, Content } = Layout;

class App extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <div onClick={this.logOut.bind(this)}>退出登录</div>
                </Menu.Item>
            </Menu>
        );
        return (
            <Layout className="main-layout">
                <Header className="main-header">
                    <div className="logo" />
                    <h1 className="name">北京**科技有限公司</h1>
                    <Dropdown overlay={menu} className="dropdown-wrap">
                        <a className="ant-dropdown-link" href="#">
                            设置 <Icon type="down" />
                        </a>
                    </Dropdown>
                </Header>
                <Content className="main-content">
                    <Map></Map>
                </Content>
            </Layout>
        );
    }
    logOut(){
        Cookies.remove('token');
        this.props.history.push('/login');
    }
}

export default withRouter(App);
