'use strict'
// Goal of UI is to display true or false password notifications
const onSignUpSuccess = responsedata => {
  console.log('success', responsedata)
  const text = responsedata.events.text
  $('#message').text('created' + text)
  console.log('Nice going!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignUpFailure = responsedata => {
  console.log('failure', responsedata)
  const text = responsedata.events.text
  $('#message').text('failed' + text)
  $('#message').removeClass()
  $('#message').addClass('failed')
}
const onSignInSuccess = responsedata => {
  console.log('success', responsedata)
  $('#messge').html('')
  const events = responsedata.events.text
  events.forEach(events => {
    $('#message').append(`<p>${events.id}: ${events.text}</p>`)
  })
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignInFailure = responsedata => {
  console.log('failure', responsedata)
  $('#messge').html('')
  const events = responsedata.events.text
  events.forEach(events => {
    $('#message').append(`<p>${events.id}: ${events.text}</p>`)
  })
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onPasswordSuccess = responsedata => {
  console.log('success', responsedata)
  $('#messge').html('')
  const events = responsedata.events.text
  events.forEach(events => {
    $('#message').append(`<p>${events.id}: ${events.text}</p>`)
  })
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onPasswordFailure = responsedata => {
  console.log('failure', responsedata)
  $('#messge').html('')
  const events = responsedata.events.text
  events.forEach(events => {
    $('#message').append(`<p>${events.id}: ${events.text}</p>`)
  })
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignOutSuccess = responseData => {
  console.log('success', responseData)
  $('#messge').html('')
  const events = responseData.events.text
  events.forEach(events => {
    $('#message').append(`<p>${events.id}: ${events.text}</p>`)
  })
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onCreateGameSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Game Created!')
    .addClass('success')
    .removeClass('failure')
}

const onCreateGameFailure = () => {
  $('#message').text('Whoops Sorry!')
    .addClass('failure')
    .removeClass('success')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onPasswordSuccess,
  onPasswordFailure,
  onSignOutSuccess,
  onCreateGameSuccess,
  onCreateGameFailure

}
