import React from 'react'
import {Col} from 'react-bootstrap'

export default (props) => {
  return (
    <Col>
      <input type='text' id='textbox' style={props.chatstyle}></input>
      <input type='Submit' id='Submit' value='Send' style={props.submitstyle}></input>
    </Col>
  )
}
