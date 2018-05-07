import axios from 'axios'
axios.defaults.baseURL='https://www.easy-mock.com/mock/5ae92b0eb4de1c75f171c78b/ycwr';

//首页数据
export function getIndex() {
  return axios('/index')
}
console.log(getIndex)

