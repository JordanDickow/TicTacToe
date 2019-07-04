'use strict'
const store = require('../store')
const onSignUpSuccess = responseData => {
  $('.jello').toggle()
  $('section').show()
  console.log(responseData)
  $('#message').text('Signed up successfully!')
    .addClass('success')
    .removeClass('failure')
}

const onSignUpFailure = responseData => {
  console.log(responseData)
  $('#message').text('Sign Up failed :///')
  setTimeout(function () {
    $('#message').hide()
  }, 2000)
}

const onSignInSuccess = data => {
  store.user = data.user
  console.log(store.user)
  $('.hello').toggle()
  $('#message').text('Sign In Success!! :D')
  setTimeout(function () {
    $('#message').hide()
  }, 2000)
}

const onSignInFailure = responseData => {
  console.log(responseData)
  $('#message').text('Sign in Failed')
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
  $('.jello').toggle()
  $('.hello').toggle()
  $('section').toggle()
  $('#message').text('Sign Out Successful')
    .addClass('success')
    .removeClass('failure')
}

const onSignOutFailure = () => {
  $('#message').text('Sign Out Failed')
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
}

const onUpdateGameSuccess = () => {

}

const onUpdateGameFailure = () => {

}
const onAllGamesSuccess = (data) => {
  $('.message6').text('Toal Games Played:' + data.games.length)
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
