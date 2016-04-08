import React from 'react'
import axios from 'axios'
import {Input, Button, Modal} from 'react-bootstrap'

class Notes extends React.Component {
  constructor () {
    super()
    this.state = {
      note: '',
      date: this.getDate(),
      showModal: false,
      sent: false
    }
    this.setState = this.setState.bind(this)
    this.getDate = this.getDate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitNotes = this.submitNotes.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }
  toggleModal () {
    this.setState({showModal: !this.state.showModal})
  }
  getDate () {
    return new Date().toString().split(' ').slice(0, 4).join(' ')
  }
  handleChange (e) {
    const note = e.target.value
    this.setState({note})
    // console.log(this.state)
  }
  submitNotes (e) {
    e.preventDefault()
    const options = {
      noteType: this.props.noteType,
      note: this.state.note,
      date: this.state.date,
      menteeUsername: this.props.menteeUsername,
      mentorUsername: this.props.mentorUsername
    }
    const url = this.props.noteRoute
    axios.post(url, options).then(this.setState({sent: true}))
  }
  render () {
    return (
      <div>
        <Modal
          show={this.state.showModal}
          onHide={this.toggleModal}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <form onSubmit={this.submitNotes} style={{padding: '1em 2em'}}>
            <h4>{this.props.noteInstructions}</h4>
            <Input
              onChange={this.handleChange}
              type='textarea'
              placeholder='let me know your thoughts'
              required
            />
            <Button
              onClick={this.toggleModal}
              type='submit'
            >
              Submit
            </Button>
          </form>
        </Modal>
        <Button onClick={this.toggleModal}>Notes</Button>
      </div>
    )
  }
}

Notes.defaultProps = {
  noteRoute: 'feedback/smellyReem',
  noteInstructions: 'please let me know how you felt about this session, so I can improve',
  noteType: 'menteeNote',
  note: 'Re\'em smells',
  menteeUsername: 'smellyRe\'em',
  mentorUsername: 'sublimeOwen'
}

export default Notes
