import React from 'react'

export default (props) => {
  return (
      <div>
        <input type='text' id='textbox' style={props.chatstyle}></input>
        <input type='Submit' id='Submit' style={props.submitstyle}></input>
      </div>
  )
}
