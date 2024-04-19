import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: 'http://159.75.109.161:8160/getRouters',
    method: 'get'
  })
}
