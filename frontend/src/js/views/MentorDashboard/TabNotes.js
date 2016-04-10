import React from 'react'
import {Tab, Tabs} from 'react-bootstrap'

export default class TabNotes extends React.Component {
  mapNotes (notes, type) {
    return notes.map(note => {
      return (
        <div className='notes-item'>
          {type === 'post' ? <p className='author'>Author: {note.mentorName}</p> : ''}
          <p className='mentee-note'>{note.note}</p>
        </div>
    )})
  }

  render () {
    return (
      <Tabs defaultActiveKey='1'>
        <Tab eventKey='1' title='Mentor Notes'>
          {this.mapNotes(this.props.postchatNotes, 'post')}
        </Tab>
        <Tab eventKey='2' title='Mentee Prechat Notes'>
        {this.mapNotes(this.props.prechatNotes, 'pre')}
        </Tab>
        <Tab eventKey='3' title='Mentee Feedback' >
          {this.mapNotes(this.props.feedbackNotes, 'feedback')}
        </Tab>
      </Tabs>
    )
  }
}
