import React from 'react'
import {Col} from 'react-bootstrap'

import Buttons from './buttons.js'

export default class VideoBox extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.reason4update !== 'messages'
  }
  render () {
    return (
      <Col className='flush'>
        <video id='video' autoPlay style={this.props.videostyle}></video>
        <Buttons buttonsStyle={this.props.buttonsStyle}/>
      </Col>
    )
  }
}
