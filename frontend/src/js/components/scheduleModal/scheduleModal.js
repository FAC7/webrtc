import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'

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

  sendReminder () {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('text message sent')
      }
    }
    xhr.open('GET', '/text')
    xhr.send()
  }

  render () {
    return (
    <div>
      <Button className='schedule' bsStyle='primary' bsSize='large' onClick={this.open}>
        See Schedule
      </Button>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>
            Schedule
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Mentee</th>
                <th>Reminder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>18/04/16</td>
                <td>9:00 am</td>
                <td>Sam Houston</td>
                <td><Button onClick={this.sendReminder.bind(this)}>Send reminder</Button></td>
              </tr>
              <tr>
                <td>21/04/16</td>
                <td>10:00 am</td>
                <td>Mireia Sangalo</td>
                <td><Button onClick={this.sendReminder.bind(this)}>Send reminder</Button></td>
              </tr>
              <tr>
                <td>23/04/16</td>
                <td>1:00 pm</td>
                <td>Rob</td>
                <td><Button onClick={this.sendReminder.bind(this)}>Send reminder</Button></td>
              </tr>
            </tbody>
          </Table>
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
