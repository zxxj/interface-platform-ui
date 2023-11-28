import axios from 'axios';

const http = axios.create({
  baseURL: 'http://192.168.100.78:4100/api',
  timeout: 5000,
});

export default http;
