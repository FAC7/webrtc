import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import videoHelpers from './../../../helpers/videoHelpers.js'

export default (props) => {
  console.log("chat box");
  return (
  <Row className="show-grid">
    <Col xs={15} md={10} className="flush"><input type="text" id="textbox" style={props.chatstyle}></input></Col>
    <Col xs={3} md={2} className="flush"><input type="Submit" id="Submit" style={props.submitstyle}></input></Col>
  </Row>
  )
}
