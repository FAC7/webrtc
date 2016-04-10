/* global IPCortex */
import React from 'react'
import {Modal} from 'react-bootstrap'
import MentorItem from './MentorItem/index.js'
import Videochat from './../Videochat/index.js'
import axios from 'axios'

var currentRoom
var rooms = {}
var media = {}
var accepted = {}

const styles = {
  li: {
    listStyleType: 'none',
    color: 'white',
    fontSize: '1.7em',
    textDecoration: 'none',
    padding: '5px'
  },
  ul: {
    backgroundColor: '#3F51B5',
    padding: '2em',
    borderRadius: '10px'
  }
}

class MentorList extends React.Component {
  constructor () {
    super()
    this.state = {
      pleaseCall: false,
      mentorList: [],
      showModal: false,
      room: currentRoom,
      messages: [],
      reason4update: 'non-videos'
    }
    this.updateState = this.updateState.bind(this)
    this.filterMentors = this.filterMentors.bind(this)
    this.initialisePBX = this.initialisePBX.bind(this)
    this.processFeed = this.processFeed.bind(this)
  }

  componentDidMount () {
    // ajax call to PBX API for info on all contacts in the room
    this.initialisePBX(this.props.appState.IPCId, this.props.appState.IPCPassword)
  }

  initialisePBX (username, password) {
    const that = this

    console.log('Logging into PBX with u: ' + username + ' p: ' + password)
    IPCortex.PBX.Auth.setHost('https://fac1.ipcortex.net')
    IPCortex.PBX.Auth.login({username: username, password: password})
      .then(() => {
        console.log('Login successful')
        /* Get the API to start collecting data */
        return IPCortex.PBX.startFeed()
      })
      .then(() => {
        // console.log(TAG, 'Live data feed started')
        that.filterMentors()
        // sets up room for video chat to be sent over
        IPCortex.PBX.enableChat((room) => {
          // rob says decide if mentee shows their video????
          currentRoom = room
          this.setState({room})
          if (typeof room !== 'object') {
            return
          }
          room.addListener('update', (_room) => {
            if (rooms[_room.roomID] && _room.state === 'dead') {
              delete rooms[_room.roomID]
            }
            const newMessagesArr = this.state.messages.concat(_room.messages)
            if (newMessagesArr.length > this.state.messages.length) {
              this.setState({
                messages: newMessagesArr,
                reason4update: 'messages'
              })
            }
          })
          /* If the room has come into existance due to a video request,
             start video with the stored stream */
          if (room.cID === media.cID && media.stream && !that.state.pleaseCall) {
            console.log('New room, starting video chat')
            /* Listen for updates on the Av instance */
            room.videoChat(media.stream).addListener('update', this.processFeed)
            media = {}
          }
          rooms[room.roomID] = room

          console.log('THAT OBJECT', that.state.pleaseCall)
          if (that.state.pleaseCall) {
            console.log('What is pleaseCall? pleaseCall is ', that.state.pleaseCall)
            MentorItem.startVideoCall(room)
          }
          // following line is webrtc vanilla

          // called after Mentor accepts video invitation
          IPCortex.PBX.enableFeature('av', (av) => {
            console.log('enable feature av')
            av.addListener('update', this.processFeed)
            this.processFeed(av, currentRoom)
          }, ['chat'])
        },
        () => {
          console.log('Live data feed failed')
        }
      )
      })
      .catch((err) => {
        console.log('Error: ')
        throw err
      })
  }

  processFeed (av) {
    console.log('current Room (when process feed)-->', currentRoom)
    /* Only process the Av instance if it has remote media */

    if (typeof av.remoteMedia !== 'object') {return}
    var videos = []
    for (var id in av.remoteMedia) {
      var accept, hangup, video
      if (av.remoteMedia[id].status === 'offered') {
        /* If the remote party is offering create an invite */
        if (accepted[av.id]) { // We have already accepted - return
          return
        }
        this.updateState({showModal: true})
        accept = document.getElementById('call')
        hangup = document.getElementById('hangup')
        video = document.getElementById('video')
        console.log('Offer recieved from ' + av.remoteMedia[id].cN)
        /* Mark the offer as accepted as we may get another
           update with the 'offer' state still set */
        accepted[av.id] = true
        // POP UP AN 'accept' BUTTON WITH ONCLICK
        hangup.addEventListener('click', () => {
          console.log('rejecting call')
          av.reject()
          this.updateState({showModal: false})
        })
        accept.addEventListener('click', () => {
          console.log('accepting call')
          /* Grab the user media and accept the offer with the returned stream */
          navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(
            (stream) => {
              av.accept(stream)
            }
          ).catch(
            () => {
              console.log('getUserMedia failed')
            }
          )
        })
        // this is a convient way to keep things in scope
        // av.addListener('update', (av) => {
        //     // if (av.state == 'closed')
        //     // get rid of video...
        //       // invite.parentNode.removeChild(invite)
        // })
      } else if (av.remoteMedia[id].status === 'connected') {
        console.log('New remote media source ', av.remoteMedia[id])
        video = document.getElementById('video')
        hangup = document.getElementById('hangup')
        var form = document.getElementById('newMessage')
        var input = document.getElementById('textbox')
        if (form) {
          form.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log('room (when clicking)-->', currentRoom)
            console.log('posting', input.value)
            currentRoom.post(input.value)
            input.value = ''
          })
        }
        hangup.addEventListener('click', () => {
          console.log('hanging up')
          av.reject()
        })
        /* Create a new video tag to play/display the remote media */
        console.log(video, '<< video\n', av.remoteMedia[id], '<< av remote')
        attachMediaStream(video, av.remoteMedia[id])  // eslint-disable-line
        videos.push(video)
        video.id = id
        video.play()
      } /* else if ( av.remoteMedia[id].status != 'connected' && video ) {
  			// Remove any video tags that are no longer in a 'connected' state //
  			video.parentNode.removeChild(video)
  		} */
    }
  }

  filterMentors () {
    // AJAX call to our api
    // save mentors to state so if new contact arrives we can still check it?
    // const mentors = [{
    //   username: 'Jacket',
    //   apiId: 'fac28a',
    //   age: 22,
    //   firstName: 'mentor 1',
    //   lastName: 'string',
    //   gender: 'male',
    //   profession: 'string',
    //   topics: ['strings'],
    //   aboutme: 'string'
    // }, {
    //   username: 'Franzzzz',
    //   apiId: 'fac21b',
    //   age: 22,
    //   firstName: 'mentor 2',
    //   lastName: 'string',
    //   gender: 'male',
    //   profession: 'string',
    //   topics: ['strings'],
    //   aboutme: 'string'
    // }, {
    //   username: 'Mireia',
    //   apiId: 'mentor-4',
    //   age: 22,
    //   firstName: 'mentor 3',
    //   lastName: 'string',
    //   gender: 'male',
    //   profession: 'string',
    //   topics: ['strings'],
    //   aboutme: 'string'
    // }, {
    //   username: 'Virginie',
    //   apiId: 'fac30a',
    //   age: 22,
    //   firstName: 'mentor 3',
    //   lastName: 'string',
    //   gender: 'male',
    //   profession: 'string',
    //   topics: ['strings'],
    //   aboutme: 'string'
    // }]


    // filter contacts who are also mentors and save to state
    // regardless of their online/offline state

    const sieveMentors = (mentorsObject) => {
      const mentors = Object.keys(mentorsObject.data.data).map((mentorName) => {
        return JSON.parse(mentorsObject.data.data[mentorName])
      })
      let mentorList = IPCortex.PBX.contacts.filter((contact) => { // eslint-disable-line
        // var isMentor = false
        // mentors.forEach((mentor) => {
        //   if (contact.uname === mentor.apiId) {
        //     console.log('made it')
        //     isMentor = true
        //     Object.assign(contact, mentor)
        //   }
        // })
        // return isMentor
        return true
      }).forEach((contact) => {
        /* Listen for updates in case the user changes state */
        contact.addListener('update', () => {
          const newMentorList = this.state.mentorList.filter((stateContact) => {
            return contact.cID !== stateContact.cID
          })
          console.log('CONTACT2', contact.name)
          this.updateState({
            mentorList: [
              ...newMentorList,
              contact
            ]
          })
        })

        console.log('CONTACT', contact.name)
        this.updateState({
          mentorList: [
            ...this.state.mentorList,
            contact
          ]
        })
      })
    }

    axios.get('/api/profile/mentors')
    .then((response) => {
      console.log('what we get back: ', response)
      sieveMentors(response)
    })
    .catch((error) => {
      console.log('axios error', error)
    })

  }

  updateState (newState) {
    this.setState(newState)
  }

  render () {
    if (this.props.location === '/mentor-dashboard') {
      styles.ul.display = 'none'
    }
    return (
      <div>
        <ul style={styles.ul}>
          {this.state.mentorList.map((mentor, i) => {
            return mentor.canChat
            ? <MentorItem
              style={styles.li}
              mentor={mentor}
              key={i}
              changeState={this.updateState}
              processFeed={this.processFeed}
              />
            : null
          })}
        </ul>
        <Modal bsSize='large'
          show={this.state.showModal}
          onHide={this.updateState.bind(this, {showModal: false})}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Videochat
              room={this.state.room}
              rooms={rooms}
              reason4update={this.state.reason4update}
              messages={this.state.messages}
            />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default MentorList
