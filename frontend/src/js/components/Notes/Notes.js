import React from 'react'
import axios from 'axios'
import {Input, Button} from 'react-bootstrap'

class Notes extends React.Component {
  constructor () {
    super()
    this.state = {
      note: '',
      date: this.getDate()
    }
    this.setState = this.setState.bind(this)
    this.getDate = this.getDate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitNotes = this.submitNotes.bind(this)
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
    axios.post('/notes', options).then(console.log('ajskdhajskdhasjkdah'))
  }
  render () {
    return (
      <form onSubmit={this.submitNotes}>
        <Input onChange={this.handleChange} type='textarea' defaultValue='its me' />
        <Button type='submit'>Submit</Button>
      </form>
    )
  }
}

Notes.defaultProps = {
  noteType: 'menteeNote',
  note: 'Re\'em smells',
  menteeUsername: 'smellyRe\'em',
  mentorUsername: 'sublimeOwen'
}

export default Notes
