import axios from "axios";
import { showMessage } from '@/utils'
const request = axios.create({
  baseURL: '/api',
  timeout: 1000 * 60 * 5
});

// 请求拦截器
request.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use(response => {
  const { code, msg } = response.data
  if (code === 0) {
    return response.data
  }
  if (code === 406) {
    showMessage({
      type: 'error',
      message: msg
    })
  }
  return Promise.reject(msg)
}, err => {
  return Promise.reject(err)
})

export default request