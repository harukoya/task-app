import client from './client'

export default {
  signUp: userInfo => {
    return new Promise((resolve, reject) => {
      client.post('/api/v1/auth', userInfo)
        .then(res => {
          resolve({name: res.data.data["name"], email: res.data.data["email"]})})
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
