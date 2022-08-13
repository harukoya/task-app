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
  },

  logout: token => {
    return new Promise((resolve, reject) => {
      client.delete(`/auth/sign_out`, { headers: { Authorization: `Bearer ${token}`}})
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
