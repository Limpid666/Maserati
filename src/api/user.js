import request from '@/utils/request'

// 登录接口
const getLoginInfo = (data) => {
  return request({ url: 'admin/login', method: 'POST', data })
}

// 获取用户信息
const getUserInfo = () => {
  return request({ url: '/admin/getinfo', method: 'POST' })
}

// 退出接口
const getloginOut = () => {
  return request({ url: 'admin/logout', method: 'POST' })
}

export default { getLoginInfo, getloginOut, getUserInfo }
