import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Message from './Message/index.js'

export default (props) => {
  return (
    <Row className='show-grid' id='messages'>
      <Col xs={18} md={12}>
        <div id='messages' style={props.messagesBoxStyle}>
          <ul id='MessageHistory' style={messageListStyle}>
            {
              props.messages.map((message) => {
                return (
                  <Message
                    messageStyle={messageStyle}
                    time={message.time}
                    author={message.cN}
                    text={message.msg}
                    key={message.msgID}
                  />
                )
              })
            }
          </ul>
        </div>
      </Col>
    </Row>
  )
}

const messageStyle = {
  width: '90%'
}

const messageListStyle = {
  listStyleType: 'none'
}

// MessagesBox.propTypes = {
//   messagesBoxStyle: React.PropTypes.Object,
//   room: React.PropTypes.Object
// }
