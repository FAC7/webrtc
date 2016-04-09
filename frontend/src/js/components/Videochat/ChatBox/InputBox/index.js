import React from 'react'
import {Col} from 'react-bootstrap'

export default (props) => {
  return (
    <Col>
      <form id='newMessage'>
        <input type='text' id='textbox' style={props.chatstyle}></input>
        <input type='Submit' value='Send' id='Submit' style={props.submitstyle}></input>
      </form>
    </Col>
  )
}
