import React from 'react'
import MentorItem from './MentorItem/index.js'
import Videochat from './../Videochat/index.js'

var currentRoom
var rooms = {}
var media = {}
var accepted = {}

class Room extends React.Component {
  constructor () {
    super()
    this.state = {
      pleaseCall: false,
      mentorList: []
    }
    this.updateState = this.updateState.bind(this)
    this.filterMentors = this.filterMentors.bind(this)
    this.initialisePBX = this.initialisePBX.bind(this)
    this.processFeed = this.processFeed.bind(this)
  }

  componentDidMount () {
    //ajax call to PBX API for info on all contacts in the room
    this.initialisePBX('fac33b', 'a2qitapm')
    var submit = document.getElementById('Submit')
    var input = document.getElementById('textbox')
    submit.addEventListener('click', (e) => {
      console.log('room (when clicking)-->', currentRoom)
      console.log('posting', input.value);
      currentRoom.post(input.value)
      input.value = ''
    })
  }
  initialisePBX (username, password) {
    const that = this
    var host = 'https://fac1.ipcortex.net'

    IPCortex.PBX.Auth.setHost('https://fac1.ipcortex.net')
    IPCortex.PBX.Auth.login({username: username, password: password}).then(
      () => {
        // console.log(TAG, 'Login successful')
        /* Get the API to start collecting data */
        IPCortex.PBX.startFeed().then(() => {
            // console.log(TAG, 'Live data feed started')
            that.filterMentors ()
            // sets up room for video chat to be sent over
            var chatEnabled = IPCortex.PBX.enableChat((room) => {
                /* Listen for updates to clean up dead rooms */
                currentRoom = room
                room.addListener('update', (room) => {
                    if (rooms[room.roomID] && room.state === 'dead'){
                      delete rooms[room.roomID]
                    }
                    var messagesBox = document.getElementById('messages')
                    room.messages.forEach((message) => {
                      // render messages
                    })
                  }
                )
                /* If the room has come into existance due to a video request,
                   start video with the stored stream */
                if (room.cID == media.cID && media.stream) {
                  console.log('New room, starting video chat')
                  /* Listen for updates on the Av instance */
                  room.videoChat(media.stream).addListener('update', this.processFeed)

                  media = {}
                }
                rooms[room.roomID] = room
              }
            )
            if (chatEnabled) {
              console.log('Chat enable, enabling av feature')
              /* Register to receive new Av instances */
              IPCortex.PBX.enableFeature('av', (av) => {
                  /* Listen for updates to the Av instance */
                  av.addListener('update', this.processFeed)
                  this.processFeed(av, currentRoom)
                },
                ['chat']
              )
            }
          },
          () => {
            // console.log(TAG, 'Live data feed failed')
          }
        )
      },
      () => {
        // console.log(TAG, 'Login failed')
      }
    )
  }


  processFeed (av, room) {
    console.log('current Room (when process feed)-->', currentRoom)
    var accept = document.getElementById('call')
    var hangup = document.getElementById('hangup')
    var video = document.getElementById('phone')
    /* Only process the Av instance if it has remote media */

    if (typeof (av.remoteMedia) != 'object')
      return
    var videos = []
    for ( var id in av.remoteMedia) {
      if (av.remoteMedia[id].status == 'offered') {
        /* If the remote party is offering create an invite */
        if (accepted[av.id]) // We have already accepted - return
          return
        console.log('Offer recieved from ' + av.remoteMedia[id].cN)
        /* Mark the offer as accepted as we may get another
        update with the 'offer' state still set */
      accepted[av.id] = true
      // POP UP AN 'accept' BUTTON WITH ONCLICK

      hangup.addEventListener('click', () => {
        console.log('rejecting call')
        av.reject()
      });

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
      av.addListener('update', (av) => {
          // if (av.state == 'closed')
          // get rid of video...
            // invite.parentNode.removeChild(invite)
      })
    } else if (av.remoteMedia[id].status == 'connected') {
      console.log('New remote media source ', av.remoteMedia[id])
      /* Create a new video tag to play/display the remote media */
      hangup.addEventListener('click', () => {
        currentRoom.leave()
      })
      attachMediaStream(video, av.remoteMedia[id])
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
  //save mentors to state so if new contact arrives we can still check it?
  let mentors = [{
    username: 'fred',
    apiId: 'mentor-1',
    age: 22,
    firstName: 'mentor 1',
    lastName: 'string',
    gender: 'male',
    profession: 'string',
    topics: ['strings'],
    aboutme: 'string'
    }, {
    username: 'jack',
    apiId: 'mentor-2',
    age: 22,
    firstName: 'mentor 2',
    lastName: 'string',
    gender: 'male',
    profession: 'string',
    topics: ['strings'],
    aboutme: 'string'
    },{
    username: 'Mireia',
    apiId: 'mentor-4',
    age: 22,
    firstName: 'mentor 3',
    lastName: 'string',
    gender: 'male',
    profession: 'string',
    topics: ['strings'],
    aboutme: 'string'
  }]

  // axios.get('/getAllMentors')
  // .then((response) => {
  //   mentors = response
  // })
  // .catch((response) => {
  //   console.log(response)
  // })

  //filter contacts who are also mentors and save to state
  //regardless of their online/offline state
  let mentorList = IPCortex.PBX.contacts.filter((contact) => {
    var isMentor = false
    mentors.forEach((mentor) => {
      if(contact.uname === mentor.apiId) {
        isMentor = true
        Object.assign(contact, mentor)
      }
    })
    return isMentor
  }).forEach((contact) => {
    /* Listen for updates in case the user changes state */
    contact.addListener('update', () => {
      // console.log(this.state.mentorList)
      const newMentorList = this.state.mentorList.filter((stateContact)  => {
        return contact.cID !== stateContact.cID
      })
      this.updateState({
        mentorList: [
          ...newMentorList,
          contact
        ]
      })
    });

    this.updateState({
      mentorList: [
        ...this.state.mentorList,
        contact
      ]
    })
  })
}

updateState (newState) {
  this.setState(newState)
  console.log('update state called', this.state)
}

render () {
  return (
    <div>
      <ul>
        {this.state.mentorList.map((mentor, i) => {
          return mentor.canChat ? <MentorItem mentor={mentor} key={i} changeState={this.updateState} /> : null
        })}
      </ul>
      <Videochat />
    </div>
    )
  }
}

export default Room
