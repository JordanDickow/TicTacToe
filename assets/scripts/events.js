'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// sets variable for current player
let currentPlayer = 'O'
// Writes function when to switch player
const switchPlayer = function () {
  if (currentPlayer === 'O') {
    currentPlayer = 'X'
  } else {
    currentPlayer = 'O'
  }
}
// board positions
const gameGrid = ['', '', '', '', '', '', '', '', '']

// game board should be array of 9 empty strings to start
// Winning comnbinations
// I'm going to write a function to check for  a win condition
// connects events.js to api

// connects events.js to ui

// onClick function to alternate players
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
    console.log('Keep Going')
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

const onGamePlay = text => {
  if (text === '') {
    const index = $(event.target).data('cell-index')
    console.log(index)
    gameGrid[index] = currentPlayer
    api.onGamePlay(event)
      .then(ui.onGamePlaySuccess)
  }
}

// exports everything in events
module.exports = {
  onClick,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGamePlay
}
