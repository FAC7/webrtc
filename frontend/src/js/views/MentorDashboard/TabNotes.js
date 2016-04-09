import React from 'react'
import {Tab, Tabs} from 'react-bootstrap'

export default class TabNotes extends React.Component {
  mapNotes (notes) {
    return notes.map(note => {
      return (
        <div>
          <p>author: {note.mentorName}</p>
          <p>{note.note}</p>
        </div>
    )})
  }

  render () {
    return (
      <Tabs defaultActiveKey='2'>
      <Tab eventKey='1' title='Mentor Notes'>
        {this.mapNotes(this.props.prechatNotes)}
      </Tab>
      <Tab eventKey='2' title='Mentee Summaries'>
        {this.mapNotes(this.props.postchatNotes)}
      </Tab>
      <Tab eventKey='3' title='Mentee Feedback' >
        {this.mapNotes(this.props.feedbackNotes)}
      </Tab>
      </Tabs>
    )
  }
}
