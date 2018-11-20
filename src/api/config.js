import axios from 'axios';
export function getUsers() {
  return axios.get('api/adminuser/list');
}

export function addUser(params) {
  return axios.post('api/adminuser/update', params);
}

export function delUser(id) {
  return axios.post(`api/adminuser/del/${id}`);
}

export function getRoles() {
  return axios.get('api/role/list');
}

export function addRole(params) {
  return axios.post('api/role/save', params);
}

export function delRole(id) {
  return axios.post(`api/role/del/${id}`);
}

export function getOrder(params) {
  return axios.get(`api/order/list`, {params});
}

export function getSetingList(params) {
  return axios.get(`/api/setting/list`, {params});
}

export function setCarSetting(params) {
  return axios.post(`api/vehicle/setting`, params);
}

export function getGlbalConfig(params) {
  return axios.get(`/api/setting/list`, {params});
}

export function setGloblConfig(params) {
  return axios.post(`/api/setting/save`, params);
}

export function setMenus(params) {
  return axios.post(`/api/role/setmenu`, params);
}
