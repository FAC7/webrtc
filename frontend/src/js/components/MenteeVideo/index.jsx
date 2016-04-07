import React from 'react'
import MentorList from './MentorList'

class Room extends React.Component {
  constructor () {
  }

  componentDidMount () {
    //ajax call to PBX API for info on all contacts in the room

  }

  render () {
    return (
      <MentorList />

    )
  }
}

export default Room
