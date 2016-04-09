import React from 'react'
import Videobox from './VideoBox/index.js'
import Chatbox from './ChatBox/index.js'

// import {Grid, Row, Col} from 'react-bootstrap'
// import videoHelpers from './../../helpers/videoHelpers.js'

export default () => {
  // const contentWidthXs = 18 - contentOffset * 2
  // const contentWidthMd = 12 - contentOffset * 2
  return (
    <div className='videoModal'>
      <div className='videoBox'>
        <Videobox
          videostyle={videostyle}
          buttonsStyle={buttonsStyle}
          callButtonStyle={callButtonStyle}
          hangupButtonStyle={hangupButtonStyle}
        />
      </div>
      <div className='chatBox'>
        <Chatbox
          chatstyle={chatstyle}
          submitstyle={submitstyle}
          messagesBoxStyle={messagesBoxStyle}
        />
      </div>
    </div>

  )
}

// const contentOffset = 2

const videostyle = {
  padding: '0',
  width: '100%',
  borderRadius: '10px',
  height: '60vh',
  marginTop: '0',
  backgroundColor: 'black'
}

const chatstyle = {
  padding: '0',
  border: '1px solid #034484',
  height: '10vh',
  width: '80%',
  paddingLeft: '5px'
}

const submitstyle = {
  padding: '0',
  height: '10vh',
  width: '20%',
  minWidth: '50px',
  backgroundColor: '#034484',
  color: 'white',
  border: 'none'
}

const callButtonStyle = {

}
const hangupButtonStyle = {

}

const messagesBoxStyle = {
  height: '50vh',
  border: '1px solid #034484',
  width: '100%',
  marginBottom: '-1px'
}

const buttonsStyle = {
  position: 'relative',
  left: '17vw',
  marginTop: '-70px'
}
