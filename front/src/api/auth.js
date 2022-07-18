import client from './client'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.post('/api/v1/auth/sign_in', authInfo)
        .then(res => resolve({token: res.data.token, client: res.data.client, uid: res.data.uid, expiry: res.data.expiry}))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message ))
        })
    })
  }
}
