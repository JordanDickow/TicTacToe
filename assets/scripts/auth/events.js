'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

let currentPlayer = 'X'

// Writes function when to switch player
const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  $('#message').text(`its ${currentPlayer}s turn`)
}
const gameGrid = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
// board positions

const winCondition = function () {
  if ((gameGrid[0] !== '' && gameGrid[0] === gameGrid[1] && gameGrid[1] === gameGrid[2]) ||
    (gameGrid[3] !== '' && gameGrid[3] === gameGrid[4] && gameGrid[4] === gameGrid[5]) ||
    (gameGrid[6] !== '' && gameGrid[6] === gameGrid[7] && gameGrid[7] === gameGrid[8]) ||
    (gameGrid[0] !== '' && gameGrid[0] === gameGrid[3] && gameGrid[3] === gameGrid[8]) ||
    (gameGrid[1] !== '' && gameGrid[1] === gameGrid[4] && gameGrid[4] === gameGrid[7]) ||
    (gameGrid[2] !== '' && gameGrid[2] === gameGrid[5] && gameGrid[5] === gameGrid[8]) ||
    (gameGrid[2] !== '' && gameGrid[2] === gameGrid[4] && gameGrid[4] === gameGrid[6]) ||
    (gameGrid[0] !== '' && gameGrid[0] === gameGrid[4] && gameGrid[4] === gameGrid[8])) {
    $('#endmessage').text(`${currentPlayer} wins!`)
  } else if (gameGrid[0] !== '' || gameGrid[1] !== '' || gameGrid[2] !== '' || gameGrid[3] !== '' || gameGrid[4] !== '' || gameGrid[5] !== '' || gameGrid[6] !== '' || gameGrid[7] !== '' || gameGrid[8] !== '') {
    $('#endmessage').text(`It's a Draw`)
  }
}
const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('sign up successful!', formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('sign in pressed', formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('password updated!', formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('sign out pressed', formData)
  api.onSignOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateGame = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.onCreateGame(formData)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onClick = event => {
  const text = $(event.target).text()
  if (text === '') {
    const index = $(event.target).data('cell-index')
    console.log(index)
    gameGrid[index] = currentPlayer
    console.log(gameGrid)
    $(event.target).text(currentPlayer)
    winCondition(gameGrid)
    api.onUpdateGame(gameGrid, winCondition)
    switchPlayer()
  }
}

const getAllGames = event => {
  event.preventDefault()
  api.onAllGames()
    .then(ui.onAllGamesSuccess)
    .catch(ui.onAllGamesFailure)
}

module.exports = {
  onClick,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  getAllGames,
  winCondition
}
