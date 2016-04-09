import React from 'react'
import MentorsEditProfile from '../../components/MentorsSignup/MentorsEditProfile.js'

export default class MentorSignup extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <MentorsEditProfile {...this.props.editProfile} editing />
    )
  }

}
