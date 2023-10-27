import axios from 'axios'; //Cliente HTTP baseado em promessas para o navegador e Node.js

const api = axios.create({
  baseURL: 'http://10.67.23.36:3333'
});

export default api;
