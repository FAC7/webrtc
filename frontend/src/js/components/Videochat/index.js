import React from 'react'
import Videobox from './Videobox/index.js'
import Chatbox from './Chatbox/index.js'

import {Grid, Row, Col} from 'react-bootstrap'
import EmptyCol from './Reused/EmptyCol.js'
// import videoHelpers from './../../helpers/videoHelpers.js'

export default () => {
  const contentWidthXs = 18 - contentOffset * 2
  const contentWidthMd = 12 - contentOffset * 2
  return (
    <Grid>
      <Row className='show-grid flush'>
        <EmptyCol md={contentOffset} />
        <Col xs={contentWidthXs} md={contentWidthMd} className='flush'>
          <Videobox
            videostyle={videostyle}
            buttonsStyle={buttonsStyle}
            callButtonStyle={callButtonStyle}
            hangupButtonStyle={hangupButtonStyle}
          />
        </Col>
        <EmptyCol md={contentOffset} />
      </Row>
      <Row className='show-grid'>
        <EmptyCol md={contentOffset} />
        <Col xs={contentWidthXs} md={contentWidthMd} className='flush'>
          <Chatbox
            chatstyle={chatstyle}
            submitstyle={submitstyle}
            messagesBoxStyle={messagesBoxStyle}
            />
        </Col>
        <EmptyCol md={contentOffset} />
      </Row>
    </Grid>
  )
}

const contentOffset = 2

const videostyle = {
  padding: '0',
  width: '100%',
  border: '3px solid blue',
  borderRadius: '5%',
  height: '60vh',
  marginTop: '30vh'
}

const chatstyle = {
  padding: '0',
  border: '1px solid black',
  height: '10vh',
  width: '90%'
}
const submitstyle = {
  padding: '0',
  height: '10vh',
  width: '10%'
}
const chatboxstyle = {
  border: '1px solid black',
  height: '10vh'
}
const messagesBoxStyle = {
  height: '40vh',
  border: '1px solid black',
  width: '100%'
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
