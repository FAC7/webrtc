import React from 'react'
import { Button, DropdownButton, MenuItem } from 'react-bootstrap'
import MenteeList from './MenteeList.js'

export default class MentorDashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      status: 'Offline'
    }
    this.changeStatus = this.changeStatus.bind(this)
  }

  changeStatus (status) {
    this.setState({
      status
    })
  }

  render () {
    return (
      <div>
        <Button href=''>View Profile</Button>
        <Button href=''>Edit Profile</Button>
        <DropdownButton bsStyle={this.state.status === 'Online' ? 'success' : 'danger'} title={this.state.status} id='status-dropdown'>
          <MenuItem eventKey='1' onClick={this.changeStatus.bind(null, 'Online')}>Online</MenuItem>
          <MenuItem eventKey='2' onClick={this.changeStatus.bind(null, 'Offline')}>Offline</MenuItem>
        </DropdownButton>
        <MenteeList mentees={this.props.mentees} />
      </div>

    )
  }
}

MentorDashboard.defaultProps = {
  status: 'Offline',
  mentees: [{menteeName: 'flkjd', conversationLink: '/contact'}, {menteeName: 'jl', conversationLink: '/contact'}, {menteeName: 'jk', conversationLink: '/contact'}]
}

MentorDashboard.propTypes = {
  status: React.PropTypes.string,
  mentees: React.PropTypes.array
}
