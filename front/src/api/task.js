import client from './client'

export default {
  add: (token, {name, listId}) => {
    return new Promise((resolve, reject) => {
      client.post('/task/add', { name, listId }, { headers: { Authorization: `Bearer ${token}` }})
        .then(res => resolve(res.data))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

}
