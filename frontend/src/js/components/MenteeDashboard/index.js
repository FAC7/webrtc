import React from 'react'
import {Grid, Row, Col, Modal, Button} from 'react-bootstrap'
import ProfileButtons from '../MentorDashboard/ProfileButtons.js'
import MenteesProfilePage from '../Profile/MenteesProfilePage.js'
import MenteesEditProfile from '../MenteesSignup/MenteesEditProfile.js'

export default class MenteeDashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      status: 'Offline',
      showViewModal: false,
      showEditModal: false
    }
    this.changeStatus = this.changeStatus.bind(this)
  }

  changeStatus (newStatus) {
    this.setState({
      status: newStatus
    })
  }

  toggleModal (typeOfModal) {
    const newState = {}
    newState[typeOfModal] = !this.state[typeOfModal]
    this.setState(newState)
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <h2>Mentors</h2>
          </Col>
        </Row>
        <Row>
          <Col md={8}>

          </Col>
          <Col md={4}>
            <ProfileButtons
              status={this.state.status}
              changeStatus={this.changeStatus}
              viewProfileLink={this.toggleModal.bind(this, 'showViewModal')}
              editProfileLink={this.toggleModal.bind(this, 'showEditModal')}
            />
          </Col>
        </Row>
        <Modal
          show={this.state.showViewModal}
          onHide={this.toggleModal.bind(this, 'showViewModal')}
        >
          <Modal.Header closeButton>
            <Modal.Title>Mentee Profile</Modal.Title>
          </Modal.Header>
          <MenteesProfilePage />
          <Modal.Footer>
            <Button onClick={this.toggleModal.bind(this, 'showViewModal')}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={this.state.showEditModal}
          onHide={this.toggleModal.bind(this, 'showEditModal')}
        >
          <Modal.Header closeButton>
            <Modal.Title>Mentee Profile</Modal.Title>
          </Modal.Header>
          <MenteesEditProfile {...this.props.editProfile} editing/>
          <Modal.Footer>
            <Button onClick={this.toggleModal.bind(this, 'showEditModal')}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Grid>
    )
  }
}

MenteeDashboard.defaultProps = {
  status: 'Offline',
  mentors: [{mentorName: 'Andrew'}, {mentorName: 'Sam'}, {mentorName: 'Ellie'}],
  editProfile: {
    username: 'theSmellyAndrew',
    firstname: 'Smelly',
    lastname: 'Andrew',
    age: 5,
    gender: 'female',
    profession: 'beingAndrew',
    topics: ['Andrew', 'Andrews greatness', 'my glossy soft head of hair'],
    aboutme: 'I am da Bomb'
  }
}

MenteeDashboard.propTypes = {
  status: React.PropTypes.string,
  mentors: React.PropTypes.array,
  viewProfileLink: React.PropTypes.string,
  editProfileLink: React.PropTypes.string,
  editProfile: React.PropTypes.object
}
