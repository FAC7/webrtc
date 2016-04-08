import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default (props) => {
  return (
    <Row className='show-grid' id='messages'>
      <Col xs={18} md={12} className='flush'>
        <div id='textbox' style={props.messagesBoxStyle}></div>
      </Col>
    </Row>
  )
}
