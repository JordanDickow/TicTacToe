'use strict'
const config = require('../config')
const store = require('../store')

const signUp = formData => {
  console.log('from api signUp', formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  console.log('from api signIn', store)
  return $.ajax({
    url: config.apiUrl + `/sign-in`,
    method: 'POST',
    data: formData
  })
}

const changePassword = formData => {
  console.log('from api change password', store)
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
  console.log('from api sign out')
  console.log('store is', store)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const onCreateGame = () => {
  console.log('Game Created', store)
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const onUpdateGame = (index, value, over) => {
  console.log('Game Updated', store)
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
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
  changePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame

}
