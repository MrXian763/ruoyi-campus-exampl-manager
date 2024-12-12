import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: 'http://localhost:8160/getRouters',
    method: 'get'
  })
}
