import client from './client'

export default {
  fetch: token => {
    return new Promise((resolve, reject) => {
      client.get('/task_lists', { headers: { Authorization: `Bearer ${token}`}})
        .then(res => resolve({ lists: res.data.task_lists }))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
