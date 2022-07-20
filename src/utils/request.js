import axios from 'axios'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  function (config) {
    console.log(1)
    const token = store.getters.token
    console.log(token)
    if (token) {
      config.headers.token = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return service(options)
}
export default request
