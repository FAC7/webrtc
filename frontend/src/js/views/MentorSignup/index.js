import React from 'react'
import MentorsEditProfile from '../../components/MentorsSignup/MentorsEditProfile.js'
import axios from 'axios'

export default class MentorSignup extends React.Component {
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
    const profession = document.getElementById('profession').value
    const topics = document.getElementById('topics').value
    const aboutme = document.getElementById('aboutme').value

    axios.post('/api/profile/mentee/' + username, {
      firstName,
      lastName,
      age,
      gender,
      profession,
      topics,
      aboutme,
    }).then((results) => {
      console.log('RESULTS: ', results)

    }).catch((err) => {
      console.log('[Error]: ' + err)
    })
  }

  render () {
    return (
      <MentorsEditProfile onSubmit={this.onSubmit}/>
    )
  }

}
