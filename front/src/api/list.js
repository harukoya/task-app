import client from './client'

export default {
  fetch: token => {
    return new Promise((resolve, reject) => {
      client.get('/tasks', { headers: { Authorization: `Bearer ${token}`}})
        .then(res => resolve({ lists: res.data.lists }))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
