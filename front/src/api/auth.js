import client from './client'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.post('/auth/sign_in', authInfo)
        .then(res => resolve({token: res.data["access_token"], expiry: res.data["expiry"]}))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message ))
        })
    })
  }
}
