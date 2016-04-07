import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import Room from '../Room/index.js'

export default () => {
  return (
    <Jumbotron className='home'>
      <Room pbxUsername='Miriea' pbxPassword='password' />
    </Jumbotron>
  )
}
