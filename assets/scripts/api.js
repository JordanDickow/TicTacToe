'use strict'
const config = require('./config')
const store = require('./store')

const signUp = formData => {
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
  console.log('store is', store)
  return $.ajax({
    url: config.apiUrl + `/sign-in`,
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

const signout = (formData) => {
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

const createGame = (formData) => {
  console.log('Game Created', store)
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'POST',
    headers: {
      Authorizaton: 'Token taken=' + store.user.token
    },
    data: '{}'
  })
}

const updateGame = (index, value, over) => {
  console.log('Game Updated', store)
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.ID}`,
    method: 'PATCH',
    headers: {
      Authorizaton: 'Token taken=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}
module.exports = {
  signUp,
  signIn,
  update,
  signout,
  createGame,
  updateGame

}
