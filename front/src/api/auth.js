import client from './client'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.post('/api/v1/auth/sign_in', authInfo)
        .then(res => resolve({token: res.headers["access-token"], client: res.headers["client"], uid: res.headers["uid"], expiry: res.headers["expiry"]}))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message ))
        })
    })
  }
}
