'use strict'
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
const gameGrid = ['0,1,3,4,5,6,7,8']
//Winning comnbinations
const winCombo = {

  win1 = ['0,1,2'],
  win2 = ['3,4,5'],
  win3 = ['6,7,8'],
  win4 = ['0,3,6'],
  win5 = ['1,4,7'],
  win6 = ['2,5,8'],
  win7 = ['2,4,6'],
  win8 = ['0,4,8']

}
// function to check for win condition
const winCon = function () {
  if (gameGrid === winCombo) {

    console.log('Check for winner')
  }
}

if (winCon === true) {
  console.log('win')
// stop game?
} else {
  console.log('Keep Going')
}

// connects events.js to api
const api = require('./api')
// connects events.js to ui
const ui = require('./ui')
// onClick function to alternate players
const onClick = event => {
  const text = $(event.target).text()
  if (text === '') {
    $(event.target).text(currentPlayer)
//calling switchPlayer fucntion
    switchPlayer()
    winCon()
  }
  // api.create(formData)
  //   .then(ui.onClickeSuccess)
  //   .catch(ui.onClickFailure)
}
//exports onClick
module.exports = {
  onClick
}
