import React from 'react'
import axios from 'axios'
import {Input, ButtonInput} from 'react-bootstrap'

export default (props) => {
  return (
<<<<<<< HEAD:frontend/src/js/components/MenteesSignup/MenteesEditProfile.js
    <form style={{padding: '0 2em'}} onSubmit={props.onSubmit}>
=======
    <form onSubmit={onSubmit} style={{padding: '0 2em'}}>
>>>>>>> origin/api-update:frontend/src/js/views/MenteesSignup/index.js
      <h4>Fill in your details</h4>
      <Input
        id='firstname'
        type='text'
        placeholder='first name'
        required
        defaultValue={props.firstname}
      />
      <Input
        id='lastname'
        type='text'
        placeholder='last name'
        defaultValue={props.lastname}
        required
      />
      <Input
        id='gender'
        type='text'
        placeholder='gender'
        defaultValue={props.gender}
        required
      />
      <Input
        id='age'
        type='text'
        placeholder='age'
        defaultValue={props.age}
        required
      />
      <Input
        id='aboutme'
        type='textarea'
        placeholder='about me'
        defaultValue={props.aboutme}
        required
      />
      <Input
        id='mobile-number'
        type='text'
        placeholder='mobile number'
        defaultValue={props.mobilenumber}
        required
      />
      <ButtonInput type='submit' defaultValue='save details'/>
    </form>
  )
}

const onSubmit = (e) => {
  e.preventDefault()

  const username = window.location.href.split('#')[1] || 'unknown'
  const firstName = document.getElementById('firstname').value
  const lastName = document.getElementById('lastname').value
  const gender = document.getElementById('gender').value
  const age = document.getElementById('gender').value
  const aboutme = document.getElementById('aboutme').value

  axios.post('/api/profile/mentee/' + username, {
    firstName,
    lastName,
    age,
    gender,
    aboutme
  }).then((results) => {
    console.log('RESULTS: ', results)
  }).catch((err) => {
    console.log('[Error]: ' + err)
  })
}
