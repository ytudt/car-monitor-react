import React, {Component} from 'react';
import {message} from 'antd';
import {extend} from '../../../core/util/index';
import api from '../../../api';
import './index.css'

class Map extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      map: {},
      carList: [],
    };
  }

  render() {
    return (
      <div className="map-wrap">
        <div id="container"></div>
      </div>
    );
  }

  componentWillMount() {
    this.initCarList();
  }

  componentDidMount() {
    this.initMap();
  }

  initCarList() {
    api.main.getVehicles()
      .then(({data}) => this.refreshCarLocation(data.data || []))
      .catch(() => message.error('车辆数据获取失败,请刷新重试~'));
  }

  refreshCarLocation(carList) {
    let AMapUI = window.AMapUI;
    AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {
      this.getCarLocation(carList)
        .then(() => this.setMarker(this.state.map, carList, SimpleMarker));
    });
  }

  setMarker(map, carList, SimpleMarker) {
    let AMap = window.AMap;
    for (let i = 0; i < carList.length; i++) {
      let car = carList[i];
      let isOnline = car.state && (car.state.indexOf('ACC熄火') === -1 && car.state.indexOf('停车') === -1);
      car.marker && (map.remove(car.marker));
      //创建SimpleMarker实例
      car.marker = new SimpleMarker({
        iconTheme: 'default',
        iconStyle: isOnline ? 'red' : 'blue',
        label: {
          content: car.licenseNumber,
          offset: new AMap.Pixel(40, 0)
        },
        map: map,
        position: car.position
      });
      // AMap.event.removeListener(car.marker,'click',this.handleCarClick);
      // AMap.event.addListener(car.marker,'click',this.handleCarClick);
    }
  }

  getCarLocation(carList) {
    let promises = Promise.all(carList.map((car) => {
      return new Promise((resolve, reject) => {
        api.main.getLocation({
          licenseNumber: car.licenseNumber,
        })
          .then(({data}) => {
            car = extend(car, data.data);
            car.position = [car.lng, car.lat];
            resolve();
          })
          .catch(() => reject());
      });
    }));
    return promises;
  }

  initMap() {
    let AMap = window.AMap;
    let map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 12,
      center: [116.397428, 39.90923]
    });
    this.setState({map});
    AMap.plugin(['AMap.ToolBar'], () => map.addControl(new AMap.ToolBar()));
  }
}

export default Map;
