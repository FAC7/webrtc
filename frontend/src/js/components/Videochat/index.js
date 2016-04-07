import React from 'react'
import Videobox from './Videobox/index.js'
import Chatbox from './Chatbox/index.js'
import {Grid, Row, Col} from 'react-bootstrap'



// const videostyle = {
//   "padding": "0",
//   height: "100%"
// }
//
const videoboxstyle = {
  marginTop: "20vh",
  border: "1px solid blue",
  height: "20vh",
  boxSizing: "border-box"
}
//
const chatstyle = {
padding: "0",
border: "1px solid black",
height: "20vh"
}
// const submitstyle = {
//   "padding": "0"
// }
const chatboxstyle = {
  border: "1px solid black",
  height: "20vh"
}
export default () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={4} md={2}></Col><Col xs={10} md={8}><Videobox videoboxstyle={videoboxstyle}/></Col><Col xs={4} md={2}></Col>
      </Row>
      <Row className="show-grid">
          <Col xs={4} md={2}></Col><Col xs={10} md={8}><Chatbox chatstyle={chatstyle}/></Col><Col xs={4} md={2}></Col>
      </Row>
    </Grid>
  )
}
