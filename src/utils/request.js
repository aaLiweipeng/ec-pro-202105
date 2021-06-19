import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/607e07af5701f2ae39a9553a6aab8bc7/heheda',
  timeout: 10000
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params })
      .then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
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

// export const post = (url, data = {}) => {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'post',
//       url: url,
//       data: data,
//       baseURL: 'https://www.fastmock.site/mock/607e07af5701f2ae39a9553a6aab8bc7/heheda',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then((response) => {
//       console.log('request response --- ', response)
//       resolve(response.data)
//     }, err => {
//       console.log('request err --- ', err)
//       alert('请求失败')
//       reject(err)
//     })
//   })
// }
