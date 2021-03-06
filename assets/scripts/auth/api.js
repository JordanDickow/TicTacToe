'use strict'
const config = require('../config')
const store = require('../store')

const signUp = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + `/sign-in`,
    method: 'POST',
    data: formData
  })
}

const changePassword = formData => {
  console.log(store)
  console.log('store is', store)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onSignOut = () => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const onCreateGame = () => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const onUpdateGame = (index, value, winCondition) => {
  console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',

    headers: {
      Authorization: 'Token token=' + store.user.token
    },

    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: store.game.over
      }
    }
  })
}

const onAllGames = () => {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame,
  onAllGames
}
