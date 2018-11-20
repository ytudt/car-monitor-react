import axios from 'axios';

export function getUserInfo() {
  return axios.get('api/adminuser');
}

export function getMenuList() {
  return axios.get('/api/menu/list');
}

