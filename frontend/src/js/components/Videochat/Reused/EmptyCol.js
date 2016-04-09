import React from 'react'
import {Col} from 'react-bootstrap'

export default (props) => {
  return <Col xs={Number(props.md) * 2} md={Number(props.md)} className='flush' />
}
