import axios from 'axios';
import Cookies from 'js-cookie';
import {serverUrl} from '../constant';
// import eventHub from 'util/eventHub';


axios.defaults.timeout = 5000;
axios.interceptors.request.use((request) => {
  const token = Cookies.get('token');
  token && request.url.indexOf('api/admin/login') === -1 && (request.headers['Authorization'] = token);
  if (request.url.indexOf('http') !== 0){
    let url = request.url.replace('/api', 'api');
    request.url = `${serverUrl}/${url}`;
  }
  return request;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  // console.log(response.data.messageCode);
  // if(response.data && response.data.messageCode === 401 && location.href.indexOf('/login') === -1){
  //
  // }
  return response;
}, (err) => {
  if(err.response && (err.response.status == 401)){
    // location.href = `${location.origin}/#/login`;
    return Cookies.remove('token');
  }
  return Promise.reject(err);
});
