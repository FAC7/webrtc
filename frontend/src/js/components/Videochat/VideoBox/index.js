import React from 'react'
import {Col} from 'react-bootstrap'

import Buttons from './buttons.js'

export default (props) => {
  return (
    <Col className='flush'>
      <video id='video' autoPlay style={props.videostyle}></video>
      <Buttons buttonsStyle={props.buttonsStyle}/>
    </Col>
  )
}
