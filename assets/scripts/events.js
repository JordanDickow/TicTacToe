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
const gameGrid = ['', '', '', '', '', '', '', '', '']

// game board should be array of 9 empty strings to start
// Winning comnbinations

const winCombo = {

  win1: [0, 1, 2],
  win2: [3, 4, 5],
  win3: [6, 7, 8],
  win4: [0, 3, 6],
  win5: [1, 4, 7],
  win6: [2, 5, 8],
  win7: [2, 4, 6],
  win8: [0, 4, 8]

}

// I'm going to write a function to check for  a win condition
// connects events.js to api
const api = require('./api')
// connects events.js to ui
const ui = require('./ui')
// onClick function to alternate players
const onClick = event => {
  const text = $(event.target).text()
  if (text === '') {
    const index = $(event.target).data('cell-index')
    console.log(index)
    gameGrid[index] = currentPlayer
    console.log(gameGrid)
    $(event.target).text(currentPlayer)
    const winCombo = function () {
    if (gameGrid[0] !== '' && gameGrid[0] === gameGrid[1] === gameGrid[1] === gameGrid[2] ||
      gameGrid[3] !== '' && gameGrid[3] === gameGrid[4] === gameGrid[4] === gameGrid[5] ||
      gameGrid[6] !== '' && gameGrid[6] === gameGrid[7] === gameGrid[7] === gameGrid[8] ||
      gameGrid[0] !== '' && gameGrid[0] === gameGrid[3] === gameGrid[3] === gmaeGid[8] ||
      gameGrid[1] !== '' && gameGrid[1] === gameGrid[4] === gameGrid[4] === gameGrid[7] ||
      gameGrid[2] !== '' && gameGrid[2] === gameGrid[5] === gameGrid[5] === gameGrid[8] ||
      gameGrid[2] !== '' && gameGrid[2] === gameGrid[4] === gameGrid[4] === gameGrid[6] ||
      gameGrid[0] !== '' && gameGrid[0] == gameGrid[4] === gameGrid[4] === gameGrid[8])
      {
        console.log('You Win!')
      } else {
        console.log('Keeg Going')
      }




switchPlayer()

  // api.create(formData)
  //   .then(ui.onClickeSuccess)
  //   .catch(ui.onClickFailure)

// exports onClick
module.exports = {
  onClick
}
