import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: 'http://8.134.251.111:8160/getRouters',
    method: 'get'
  })
}
