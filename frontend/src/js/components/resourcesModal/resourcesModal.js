import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'

class Resources extends React.Component {
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
      <Button className='resources' bsStyle='primary' bsSize='large' onClick={this.open}>
        See Resources
      </Button>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>
            Resources
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Mentee</th>
                <th>Notes</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sam Houston</td>
                <td>Sam should do yoga three times a week.</td>
                <td><a target='_blank' href='https://www.youtube.com/user/yogawithtim'>Yoga</a></td>
              </tr>
              <tr>
                <td>Mireia Sangalo</td>
                <td>Mireia should work on mental focus and concentration.</td>
                <td><a target='_blank' href='https://www.youtube.com/watch?v=a8GrUeE0eHs'>Meditation</a></td>
              </tr>
              <tr>
                <td>Rob</td>
                <td>Rob should take deep breaths before work every day.</td>
                <td><a target='_blank' href='https://www.youtube.com/watch?v=ExvXmsr--Mk'>Breathing</a></td>
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

export default Resources
