import axios from 'axios';
export function getVehicles() {
  return axios.get('api/vehicle/list');
}
export function getLocation(params) {
  return axios.get('api/vehicle/location', {params});
}

export function getOrderList(params) {
  return axios.get('api/order/list', {params});
}

export function getTripList(params) {
  return axios.get('api/trip/list', {params});
}

export function getTripPois(params) {
  return axios.get('api/trip/pois', {params});
}
