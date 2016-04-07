import React from 'react'
import {Button, DropdownButton, MenuItem, ButtonGroup} from 'react-bootstrap'

export default (props) => {
  return (
    <ButtonGroup vertical block>
      <Button onClick={props.viewProfileLink} block>View Profile</Button>
      <Button onClick={props.editProfileLink} block>Edit Profile</Button>
      <DropdownButton
        bsStyle={props.status === 'Online' ? 'success' : 'danger'}
        title={props.status}
        id='status-dropdown'
      >
        <MenuItem eventKey='1' onClick={props.changeStatus.bind(null, 'Online')}>Online</MenuItem>
        <MenuItem eventKey='2' onClick={props.changeStatus.bind(null, 'Offline')}>Offline</MenuItem>
      </DropdownButton>
    </ButtonGroup>
  )
}
