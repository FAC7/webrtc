import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import MentorList from './../MentorList/index.js'

export default () => {
  return (
    <Jumbotron className='home'>
      <MentorList />
    </Jumbotron>
  )
}
