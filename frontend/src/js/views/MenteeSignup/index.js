import React from 'react'
import MenteesEditProfile from '../../components/MenteesSignup/MenteesEditProfile.js'

export default class MenteeSignup extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <MenteesEditProfile {...this.props.editProfile} editing />
    )
  }

}
