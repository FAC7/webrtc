import React from 'react'
import Videobox from './VideoBox/index.js'
import Chatbox from './ChatBox/index.js'

export default (props) => {
  return (
    <div className='videoModal'>
      <div className='videoBox'>
        <Videobox
          videostyle={videostyle}
          buttonsStyle={buttonsStyle}
          callButtonStyle={callButtonStyle}
          hangupButtonStyle={hangupButtonStyle}
          reason4update={props.reason4update}
        />
      </div>
      <div className='chatBox'>
        <Chatbox
          chatstyle={chatstyle}
          submitstyle={submitstyle}
          messagesBoxStyle={messagesBoxStyle}
          room={props.room}
          rooms={props.rooms}
          messages={props.messages}
        />
      </div>
    </div>

  )
}

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
