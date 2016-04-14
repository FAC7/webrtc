import React from 'react'
import axios from 'axios'
import EventCalendar from 'react-event-calendar'
import {Input, Button, Modal} from 'react-bootstrap'

class Schedule extends React.Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      sent: false
    }
    this.getInitialState = this.getInitialState.bind(this)
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  getInitialState () {
    return { showModal: false }
  }

  close () {
    this.setState({ showModal: false })
  }

  open () {
    this.setState({ showModal: true })
  }

  render () {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          See Schedule
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <EventCalendar
          month={7}
          year={2015}
          events={this.props.events}
          onEventClick={(ref, eventData) => console.log(eventData)} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

Schedule.defaultProps = {
  events : [
    {
      start: '2015-07-20',
      end: '2015-07-02',
      title: 'test event',
      description: 'This is a test description of an event',
    },
    {
      start: '2015-07-19',
      end: '2015-07-25',
      title: 'test event',
      description: 'This is a test description of an event',
      data: 'you can add what ever random data you may want to use later',
    },
  ]
}

export default Schedule
