'use strict'

// use require with a reference to bundle the file and use it in this file
const events = require('./events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.col-sm').on('click', events.onClick)
})

// const switchPlayer = function (turn) {
//   if (turn === 1) {
//     $(event.target).text('x')
//   } else {
//     $(event.target).text('o')
//   }
//
//   return switchPlayer
// }

// const currentPlayer = require('../store')
//
// const store.currentPlayer = 1
//
// const switchPlayer = function (turn) {
//   if (turn === 1) {
//     $(event.target).store.player('x')
//   } else {
//     $(event.target).store.player('o')
//   }
//
//   return switchPlayer
// }

// absolute value x - 1

// Keep track of player
// function

// Access store 'require file'
// Add key to hold current player
// Set value to either X or O
// Valid spot switch (function)

// store current player (store.currntplayer = 'X')
// write function to alternate players
// Use store player in .text setter
