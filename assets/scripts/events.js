'use strict'
// sets variable for current player
let currentPlayer = 'X'
// Writes function
const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

// const getFormFields = require('/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onClick = event => {
  const text = $(event.target).text()
  if (text === '') {
    $(event.target).text(currentPlayer)
    switchPlayer()
  }
  // api.create(formData)
  //   .then(ui.onClickeSuccess)
  //   .catch(ui.onClickFailure)
}

module.exports = {
  onClick
}
