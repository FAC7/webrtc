import React from 'react'

export default (props) => {
  var formattedDate = new Date(props.time * 1000)
  let hours = formattedDate.getHours()
  hours = String(hours).length > 1 ? hours : '0' + hours
  let minutes = formattedDate.getMinutes()
  minutes = String(minutes).length > 1 ? minutes : '0' + minutes
  let seconds = formattedDate.getSeconds()
  seconds = String(seconds).length > 1 ? seconds : '0' + seconds
  formattedDate = (hours + ':' + minutes + ':' + seconds)

  return (
    <li style={props.messageStyle} key={props.key}>
      <span style={messageInfo}>{formattedDate} {props.author} said:</span> <span style={userMessage}>{props.text}</span>
    </li>
  )
}

const messageInfo = {
  fontWeight: 'bold'
}

const userMessage = {
}
