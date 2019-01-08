import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Dropdown, Layout, Menu, message} from 'antd';
import './index.scss'
import Map from './map/index.js';
import Header from '../../components/header/index.js';
import api from "../../api";

const {Content} = Layout;
const MenuItem = Menu.Item;

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showDialog: false,
      userName: '',
      password: '',
      carList: [],
      userInfo: {},
    };
  }
  render() {
    const menu = this.state.carList.length ? (<Menu>
      {this.state.carList.map((item, index) => {
        return <MenuItem key={index} onClick={this.handleTrailShow.bind(this, item)}>
          {item.licenseNumber}
        </MenuItem>
      })
      }
    </Menu>) : <Menu><MenuItem>车辆为空</MenuItem></Menu>;
    return (
      <Layout className="main-layout">
        <Header>
          <div className="header-menu-list">
            <Dropdown overlay={menu} className="header-menu-item dropdown-wrap">
              <span>轨迹</span>
            </Dropdown>
            <div className="header-menu-item">配置台</div>
          </div>
        </Header>
        <Content className="main-content">
          <Map></Map>
        </Content>
      </Layout>
    );
  }

  componentWillMount() {
    this.getCarList();
  }

  getCarList() {
    api.main.getVehicles()
      .then(({data}) => {
        this.setState({carList: data.data});
      })
      .catch(() => message.error('车辆数据获取失败,请刷新重试~'));
  }

  handleTrailShow(car) {
    console.log(car);
  }
}

export default withRouter(App);
