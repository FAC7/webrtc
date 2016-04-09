import React from 'react'
import MenteesEditProfile from '../../components/MenteesSignup/MenteesEditProfile.js'
import axios from 'axios'

export default class MenteeSignup extends React.Component {
  constructor () {
    super()
  }

  onSubmit (e) {
    e.preventDefault()

    const username = window.location.href.split('#')[1] || 'unknown'
    const firstName = document.getElementById('firstname').value
    const lastName = document.getElementById('lastname').value
    const gender = document.getElementById('gender').value
    const age = document.getElementById('age').value
    const aboutme = document.getElementById('aboutme').value
    const mobile = document.getElementById('mobile-number').value

    console.log('sdugtykghfdsdkilygfdhghjfdssfhjfsdg')
    axios.post('/api/profile/mentee/' + username, {
      firstName,
      lastName,
      age,
      gender,
      aboutme,
      mobile
    }).then((results) => {
      console.log('RESULTS: ', results)
    }).catch((err) => {
      console.log('[Error]: ' + err)
    })
  }

  render () {
    return (
      <MenteesEditProfile onSubmit={this.onSubmit}/>
    )
  }

}
