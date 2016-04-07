import React from 'react'
import videoHelpers from './../../../helpers/videoHelpers.js'


export default (props) => {
  console.log("video box" , this);
  return (
    <div style={props.videoboxstyle}>
      <video id="phone" autoPlay style={props.videostyle}></video>
      <img src="./img/call.png" id="call"/>
      <img src="./img/hangup.png" id="hangup"/>
    </div>
  )
}
