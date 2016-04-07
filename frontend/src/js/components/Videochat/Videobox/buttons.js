import React from 'react'

export default (props) => {
  return (
  <div style={props.buttonsStyle}>
    <img src='./img/call.png' id='call' style={props.callButtonStyle} />
    <img src='./img/hangup.png' id='hangup' style={props.hangupButtonStyle} />
  </div>
  )
}
