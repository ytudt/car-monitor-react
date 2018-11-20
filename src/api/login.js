import axios from 'axios';
export function doLogin(params) {
  return axios.post('api/admin/login', params);
}
