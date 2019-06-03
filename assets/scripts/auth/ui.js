'use strict'
const store = require('../store')

const onSignUpSuccess = responseData => {
  console.log(responseData)
  $('#message').text('Signed up successfully!')
    .addClass('success')
    .removeClass('failure')
}

const onSignUpFailure = responseData => {
  console.log(responseData)
  $('#message').text('Sign Up failed :///')
    .addClass('failure')
    .removeClass('success')
}

const onSignInSuccess = data => {
  store.user = data.user
  console.log(store.user)
  $('#message').text('Sign In Success!! :D')
    .addClass('success')
    .removeClass('failure')
}

const onSignInFailure = responseData => {
  console.log(responseData)
  $('#message').text('Sign in failed :,,,()')
    .addClass('failure')
    .removeClass('success')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Change Password Successfully')
    .addClass('successs')
    .removeClass('failure')
}

const onChangePasswordFailure = () => {
  $('#message').text('Change Password Failed')
    .addClass('failure')
    .removeClass('success')
}

const onSignOutSuccess = () => {
  $('#message').text('Sign Out Successful')
    .addClass('success')
    .removeClass('failure')
}

const onSignOutFailure = () => {
  $('#message').text('Sign Out Failed')
    .addClass('failure')
    .removeClass('success')
}

const onCreateGameSuccess = (data) => {
  store.game = data.game
  console.log(store.game)
  $('section').show()
  $('#message').text('Game Created!')
  $('#message').text(`it's X/s turn`)
    .addClass('success')
    .removeClass('failure')
}

const onCreateGameFailure = (data) => {
  store.game = data.game
  $('#message').text('Whoops Sorry!')
    .addClass('failure')
    .removeClass('success')
}

const onUpdateGameSuccess = () => {

}

const onUpdateGameFailure = () => {

}
const onAllGamesSuccess = (data) => {
  $('#message').text('Toal Games Played:' + data.games.length)
}

const onAllGamesFailure = () => {

}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutFailure,
  onSignOutSuccess,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onAllGamesSuccess,
  onAllGamesFailure

}
