import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import videoHelpers from './../../../helpers/videoHelpers.js'

export default (props) => {
  console.log("chat box");
  return (
    <Grid>
  <Row className="show-grid">
    <Col xs={15} md={10}><input type="text" id="textbox" ></input></Col>
    <Col xs={3} md={2}><input type="Submit" id="Submit" ></input></Col>
  </Row>
  </Grid>


  )
}
