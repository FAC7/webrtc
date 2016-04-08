import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default (props) => {
  return (
    <Row className='show-grid' id='messages'>
      <Col xs={18} md={12} className='flush'>
        <input type='text' id='textbox' style={props.messagesBoxStyle}></input>
      </Col>
    </Row>
  )
}
