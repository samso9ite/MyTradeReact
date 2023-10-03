import axios from 'axios'

const axios_instance = axios.create();
axios_instance.defaults.timeout = 300000;
axios_instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
axios_instance.defaults.headers.post['Accept'] = 'application/json;';
axios_instance.interceptors.request.use(async function (config) {
let token = await sessionStorage.getItem('token')
config.headers.Authorization = `Bearer ${token}`
  return config;
});


const baseUrl = 'http://localhost:8080/api/v1/'
// const baseUrl = 'https://api.mytrade.ng/api/v1/' 
axios_instance.baseUrl = baseUrl
export default {
  axios_instance,
  baseUrl,
}               