/* global XMLHttpRequest */
import React from 'react'
import {Well, Collapse, Button} from 'react-bootstrap'
import SubmitNotes from '../../components/SubmitNotes/SubmitNotes.js'

export default class MenteeItem extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  sendReminder () {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('text message sent')
      }
    }
    xhr.open('GET', 'https://api.tropo.com/1.0/sessions?action=create&token=527a57644f67546967487876524670556a4d6a48685a64456d62686b5341554d467373584e4f4e705465566f&numberToDial=' + this.props.phoneNumber.substr(3) + '&menteeName=' + this.props.menteeName)
    xhr.send()
  }

  render () {
    return (
      <div>
        <a style={{textDecoration: 'none'}}>
          <li
            key={this.props.index}
            onClick={() => this.setState({open: !this.state.open})}
            style={this.props.styles}
          >
            {this.props.menteeName}

          </li>
        </a>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <p>
                <b>Last conversation:</b>
                {(new Date(this.props.lastConversation)).toString().substr(0, 15)}
              </p>
              <p><b>About:</b> {this.props.about}</p>
              <p><b>Notes:</b> {this.props.notes}</p>
              <SubmitNotes
                menteeUsername={this.props.menteeUserame}
                notesInstructions='Mentee notes'
                mentorUserame={this.props.mentorUsername}
              />
                <Button onClick={this.sendReminder.bind(this)}>Send reminder</Button>

            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}

MenteeItem.propTypes = {
  index: React.PropTypes.number,
  conversationLink: React.PropTypes.string,
  lastConversation: React.PropTypes.number,
  menteeName: React.PropTypes.string,
  styles: React.PropTypes.object,
  about: React.PropTypes.string,
  notes: React.PropTypes.string,
  phoneNumber: React.PropTypes.string,
  mentorUserame: React.PropTypes.string
}
