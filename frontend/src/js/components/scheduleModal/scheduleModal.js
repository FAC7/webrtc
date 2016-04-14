import React from 'react'
import { Button, Modal } from 'react-bootstrap'

class Schedule extends React.Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      sent: false
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
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
      <Button className='schedule' bsStyle='primary' bsSize='large' onClick={this.open}>
        See Schedule
      </Button>
      <Button className='resources' bsStyle='primary' bsSize='large' onClick={this.open}>
        See Resources
      </Button>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>
            Schedule
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> 19/04/16 9:00 am  Frank </p><br/>
          <p> 23/04/16 11:00 am  James </p><br/>
          <p> 24/04/16 2:00 pm  Nina </p><br/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
}

export default Schedule
