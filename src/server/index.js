import axios from 'axios'
axios.defaults.baseURL='https://www.easy-mock.com/mock/5af292f7ba54552178d987db/ycwr1';

//首页数据
export function getIndex() {
  return axios('/index')
}


