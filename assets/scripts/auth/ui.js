'use strict'
const store = require('../store')
// const data = require('../data')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed up successfully!')
    .addClass('success')
    .removeClass('failure')
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Sign Up failed :///')
    .addClass('failure')
    .removeClass('success')
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Sign In Success!! :D')
    .addClass('success')
    .removeClass('failure')
  store.user = responseData.user
  console.log('store is')
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
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

const onCreateGameSuccess = () => {
  $('#message').text('Game Created!')
    .addClass('success')
    .removeClass('failure')
}

const onCreateGameFailure = () => {
  $('#message').text('Whoops Sorry!')
    .addClass('failure')
    .removeClass('success')
}

const onUpdateGameSuccess = (store) => {

}

const onUpdateGameFailure = () => {

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
  onUpdateGameFailure

}
