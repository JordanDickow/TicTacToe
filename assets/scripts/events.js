'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// sets variable for current player
let currentPlayer = 'X'
// Writes function when to switch player
const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}
// board positions
const gameGrid = ['', '', '', '', '', '', '', '', '']

const winCondition = function () {
  if (gameGrid[0] !== '' && gameGrid[0] === gameGrid[1] === gameGrid[1] === gameGrid[2] &&
    gameGrid[3] !== '' && gameGrid[3] === gameGrid[4] === gameGrid[4] === gameGrid[5] &&
    gameGrid[6] !== '' && gameGrid[6] === gameGrid[7] === gameGrid[7] === gameGrid[8] &&
    gameGrid[0] !== '' && gameGrid[0] === gameGrid[3] === gameGrid[3] === gameGrid[8] &&
    gameGrid[1] !== '' && gameGrid[1] === gameGrid[4] === gameGrid[4] === gameGrid[7] &&
    gameGrid[2] !== '' && gameGrid[2] === gameGrid[5] === gameGrid[5] === gameGrid[8] &&
    gameGrid[2] !== '' && gameGrid[2] === gameGrid[4] === gameGrid[4] === gameGrid[6] &&
    gameGrid[0] !== '' && gameGrid[0] === gameGrid[4] === gameGrid[4] === gameGrid[8]) {
    console.log('You Win!')
  } else {

  }
}

const onClick = event => {
  const text = $(event.target).text()
  if (text === '') {
    const index = $(event.target).data('cell-index')
    console.log(index)
    gameGrid[index] = currentPlayer
    console.log(gameGrid)
    $(event.target).text(currentPlayer)
    api.updateGame(currentPlayer, gameGrid)
    winCondition()
    switchPlayer()
  }
}

// document.getElementById("reset").onclick = function() {
//    document.getElementById("numbers").innerHTML = "";
// };
switchPlayer()
winCondition()

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.onSignUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.onSignUp(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.onChangePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.onChangePassword(formData)
    .then(ui.onSignOutSuccess)
}

const onCreateGame = event => {
  event.preventDefault()
  console.log('Game Created!')
  const form = event.target
  const formData = getFormFields(form)
  api.onCreateGame(formData)
    .then(ui.onCreatGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// exports everything in events
module.exports = {
  onClick,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame
}
