import axios from 'axios'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: data,
      baseURL: 'https://www.fastmock.site/mock/607e07af5701f2ae39a9553a6aab8bc7/heheda',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log('request response --- ', response)
      resolve(response.data)
    }, err => {
      console.log('request err --- ', err)
      alert('请求失败')
      reject(err)
    })
  })
}
