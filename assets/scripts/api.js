'use strict'
const config = require('./config')
const store = require('./store')

const create = formData => {
  console.log('from api create')
  console.log('store is', store)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData,
    headers: {
      Authorizaton: 'Token taken=' + store.user.token
    }
  })
}
const signIn = (formData) => {
  console.log('from api sign in')
  console.log('from store', store)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData,
    headers: {
      Authorizaton: 'Token taken=' + store.user.token
    }
  })
}

const update = (formData) => {
  console.log('from api update password')
  console.log('from store', store)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token taken=' + store.user.token
    }
  })
}

const byeBye = (formData) => {
  console.log('from api sign out')
  console.log('from store', store)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    data: formData,
    headers: {
      Authorization: 'Token taken=' + store.user.token
    }
  })
}

const gamePlay = (formData) => {
  console.log('from api game play')
  console.log('from store', store)
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token taken=' + store.user.token
    }
  })
}

module.exports = {
  create,
  signIn,
  update,
  byeBye,
  gamePlay

}
