import React from 'react'
import {Grid, Row, Col, Modal, Button} from 'react-bootstrap'
import MenteeList from './MenteeList.js'
import ProfileButtons from './ProfileButtons.js'
import MentorsProfilePage from '../../components/Profile/MentorsProfilePage.js'
import MentorsEditProfile from '../../components/MentorsSignup/MentorsEditProfile.js'
import MentorList from '../../components/MentorList/index.js'

export default class MentorDashboard extends React.Component {
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
            <h2>Conversations with Mentees</h2>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <MenteeList
              mentees={this.props.mentees}
              mentorUsername={this.props.username}
              {...this.props}
            />
            <MentorList {...this.props} location={this.props.location.pathname}/>
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
            <Modal.Title>Mentor Profile</Modal.Title>
          </Modal.Header>
          <MentorsProfilePage />
          <Modal.Footer>
            <Button onClick={this.toggleModal.bind(this, 'showViewModal')}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={this.state.showEditModal}
          onHide={this.toggleModal.bind(this, 'showEditModal')}
        >
          <Modal.Header closeButton>
            <Modal.Title>Mentor Profile</Modal.Title>
          </Modal.Header>
          <MentorsEditProfile {...this.props.editProfile} editing/>
          <Modal.Footer>
            <Button onClick={this.toggleModal.bind(this, 'showEditModal')}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Grid>
    )
  }
}

MentorDashboard.defaultProps = {
  status: 'Offline',
  mentees: [
    {menteeName: 'Sam Houston',
    phoneNumber: '+447849619953',
      conversationLink: '/contact',
      feedbackNotes: [{
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }],
      prechatNotes: [{
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }],
      postchatNotes: [{
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }],
      lastConversation: 1460028602793,
      about: 'Sam is 17 and recently diagnosed with quite severe anxiety, particularly' +
      'school-related. He would like to start working towards his exams but needs some ' +
      'direction around what to expect, how to deal with it and some advice to help alleviate ' +
      'his anxiety. As he is on the waiting list at a service, which may be as long as 18 weeks,' +
      ' they signpost him to the mentoring platform.'
    },
    {menteeName: 'Smelly Andrew',
      phoneNumber: '+447885727095',
      conversationLink: '/contact',
      feedbackNotes: [{
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }],
      prechatNotes: [{
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }],
      postchatNotes: [{
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }],
      lastConversation: 1460028602793,
      about: 'Sam is 17 and recently diagnosed with quite severe anxiety, particularly' +
      'school-related. He would like to start working towards his exams but needs some ' +
      'direction around what to expect, how to deal with it and some advice to help alleviate ' +
      'his anxiety. As he is on the waiting list at a service, which may be as long as 18 weeks,' +
      ' they signpost him to the mentoring platform.'
    },
    {menteeName: 'Rob ',
      phoneNumber: '+447849619953',
      conversationLink: '/contact',
      feedbackNotes: [{
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }],
      prechatNotes: [{
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }],
      postchatNotes: [{
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }, {
        note: 'I feel great right now',
        mentorName: 'smellyAndrew',
        menteeName: 'sublimeOwen',
        date: 'somestring'
      }],
      lastConversation: 1460028602793,
      about: 'Sam is 17 and recently diagnosed with quite severe anxiety, particularly' +
      'school-related. He would like to start working towards his exams but needs some ' +
      'direction around what to expect, how to deal with it and some advice to help alleviate ' +
      'his anxiety. As he is on the waiting list at a service, which may be as long as 18 weeks,' +
      ' they signpost him to the mentoring platform.'
    }],
  editProfile: {
    username: 'theSmellyAndrew',
    firstname: 'Smelly',
    lastname: 'Andrew',
    age: 5,
    gender: 'female',
    profession: 'beingAndrew',
    topics: ['Andrew', 'Andrews greatness', 'my glossy soft head of hair'],
    aboutme: 'I am da Bomb',
    mobile: '07512345678'
  }
}

MentorDashboard.propTypes = {
  status: React.PropTypes.string,
  mentees: React.PropTypes.array,
  viewProfileLink: React.PropTypes.string,
  editProfileLink: React.PropTypes.string,
  editProfile: React.PropTypes.object
}
