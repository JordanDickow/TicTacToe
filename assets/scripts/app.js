'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('section').hide()
  $('.col-sm').on('click', authEvents.onClick)
  $('#Sign-Up').on('submit', authEvents.onSignUp)
  $('#Sign-In').on('submit', authEvents.onSignIn)
  $('#Change-Password').on('submit', authEvents.onChangePassword)
  $('#Sign-Out').on('submit', authEvents.onSignOut)
  $('#create-game').on('click', authEvents.onCreateGame)
  $('#all-games').on('click', authEvents.getAllGames)
})
