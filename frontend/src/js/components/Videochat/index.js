import React from 'react'
import Videobox from './Videobox/index.js'
import Chatbox from './Chatbox/index.js'
import {Grid, Row, Col} from 'react-bootstrap'



const videostyle = {
  padding: '0',
  height: '100%',
  width: '100%',
  border: '1px solid blue',
  height: '60vh',
  marginTop: '30vh',
}

const chatstyle = {
padding: '0',
border: '1px solid black',
height: "10vh",
width: '100%'
}
const submitstyle = {
  padding: '0',
  height: "10vh",
  width: '100%'
}
const chatboxstyle = {
  border: '1px solid black',
  height: '10vh'
}
const callButtonStyle = {

}
const hangupButtonStyle = {

}
const buttonsStyle = {
  position: 'absolute',
  bottom: '2vh',
  right: '2vw'
}
export default () => {
  return (
    <Grid>
      <Row className="show-grid flush">
        <Col xs={4} md={2}></Col>
        <Col xs={10} md={8}>
          <Videobox
            videostyle={videostyle}
            buttonsStyle={buttonsStyle}
            callButtonStyle={callButtonStyle}
            hangupButtonStyle={hangupButtonStyle}
          />
        </Col>
        <Col xs={4} md={2} className='flush'></Col>
      </Row>
      <Row className="show-grid">
          <Col xs={4} md={2} className='flush'></Col>
          <Col xs={10} md={8} className='flush'>
            <Chatbox
              chatstyle={chatstyle}
              submitstyle={submitstyle}
              chatstyle={chatstyle}
              />
          </Col>
          <Col xs={4} md={2} className='flush'></Col>
      </Row>
    </Grid>
  )
}
