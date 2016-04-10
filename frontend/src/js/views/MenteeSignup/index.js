import React from 'react'
import MenteesEditProfile from '../../components/MenteesSignup/MenteesEditProfile.js'
import axios from 'axios'

export default class MenteeSignup extends React.Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()

    const firstName = document.getElementById('firstname').value
    const lastName = document.getElementById('lastname').value
    const username = firstName + '_' + lastName
    const gender = document.getElementById('gender').value
    const age = document.getElementById('age').value
    const aboutme = document.getElementById('aboutme').value
    const mobile = document.getElementById('mobile-number').value

    axios.post('/api/profile/mentee/' + username, {
      firstName,
      lastName,
      age,
      gender,
      aboutme,
      mobile
    }).then((results) => {
      console.log('RESULTS: ', results)
      this.props.MUTATE_GLOBAL_STATE({ // eslint-disable-line
        IPCId: results.data.data.apidId,
        IPCPassword: results.data.data.apiPassword,
        name: results.data.data.firstName,
        isLoggedIn: true
      })
      this.props.history.push('/mentee-dashboard')
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
