import React from 'react'
import {Collapse} from 'react-bootstrap'

export default class NotesList extends React.Component {
  render () {
    return (
      <Collapse in={this.state.open}>
        <p>sublime Owen</p>
      </Collapse>
    )
  }
}
