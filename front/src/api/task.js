import client from './client'

export default {
  add: (token, {name, listId}) => {
    return new Promise((resolve, reject) => {
      client.post(`/tasks/add`, { name, listId }, { headers: { Authorization: `Bearer ${token}` }})
        .then(res => resolve(res.data))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  update: (token, {id, name, description, listId}) => {
    return new Promise((resolve, reject) => {
      client.put(`/tasks/${id}/`, { name, description, listId }, { headers: { Authorization: `Bearer ${token}`}})
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  remove: (token, {id, listId}) => {
    return new Promise((resolve, reject) => {
      client.delete(`/tasks/${id}`, { headers: { Authorization: `Bearer ${token}`}})
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

}
