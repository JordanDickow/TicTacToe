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

// I'm going to write a function
const checkWin = function () {
  if(gameGrid[1].textContent === "X" &&
  win[2].textContent === "X" &&
  board[3].textContent === "X"
) { alert("Win")}
else if (
  board[3].textContent === "X" &&
  board[4].textContent === "X" &&
  board[5].textContent === "X"
) { alert("Win")}
 else if (
  board[6].textContent === "X" &&
  board[7].textContent === "X" &&
  board[8].textContent === "X"
) { alert("Win")}

}

}
// function to check for win condition
// const winCon = function () {
//
//     console.log('Check for winner')
//   } else {
//     console.log('keep going')
//   }
//   if (winCon === true) {
//     console.log('win')
//     // stop game?
//   } else {
//     console.log('Keep Going')
//   }
// }
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
// calling switchPlayer fucntion
    switchPlayer()

  }
  // api.create(formData)
  //   .then(ui.onClickeSuccess)
  //   .catch(ui.onClickFailure)
}
// exports onClick
module.exports = {
  onClick
}
