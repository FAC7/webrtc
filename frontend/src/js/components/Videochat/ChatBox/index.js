import React from 'react'
import {Col} from 'react-bootstrap'
import InputBox from './InputBox/index.js'
import MessagesBox from './MessagesBox/index.js'

export default (props) => {
  return (
    <div>
      <Col xs={18} md={12} className='flush'>
        <MessagesBox messagesBoxStyle={props.messagesBoxStyle}/>
        <InputBox chatstyle={props.chatstyle} submitstyle={props.submitstyle}/>
      </Col>
    </div>
  )
}
