import React from 'react'
import {Well, Collapse} from 'react-bootstrap'
import SubmitNotes from '../SubmitNotes/SubmitNotes.js'
export default class MenteeItem extends React.Component {
  constructor () {
    super()
    this.state = {}
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
  menteeName: React.PropTypes.string,
  styles: React.PropTypes.object
}
