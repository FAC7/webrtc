import React from 'react'
import MentorItem from './MentorItem/index.js'

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
  }

  componentDidMount () {
    //ajax call to PBX API for info on all contacts in the room
    this.initialisePBX('fac33b', 'a2qitapm')
  }
  initialisePBX (username, password) {
    const that = this
    var media = {}
    var accepted = {}
    var host = 'https://fac1.ipcortex.net'

    IPCortex.PBX.Auth.setHost('https://fac1.ipcortex.net')
    IPCortex.PBX.Auth.login({username: username, password: password}).then(
      function () {
        // console.log(TAG, 'Login successful')
        /* Get the API to start collecting data */
        IPCortex.PBX.startFeed().then(
          function () {
            // console.log(TAG, 'Live data feed started')
            that.filterMentors ()
            // sets up room for video chat to be sent over
            IPCortex.PBX.enableChat((room) => {
              // rob says decide if mentee shows their video????
              if ( typeof room != 'object' ){
                return
              }
              console.log('THAT OBJECT', that.state.pleaseCall)
              if (that.state.pleaseCall) {
                console.log('What is pleaseCall? pleaseCall is ', that.state.pleaseCall);
                MentorItem.startVideoCall(room);
              }
              //following line is webrtc vanilla

              //called after Mentor accepts video invitation
              IPCortex.PBX.enableFeature('av', (av) => {
                console.log('enable feature av')
              }, ['chat'])
            },
            function () {
              // console.log(TAG, 'Live data feed failed')
            }
          )
        },
        function () {
          // console.log(TAG, 'Login failed')
        }
      )
    });
  }

  filterMentors () {
    // AJAX call to our api
    //save mentors to state so if new contact arrives we can still check it?
    let mentors = [{
      username: 'fred',
      apiId: 'fac21b',
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
      <video id='video'></video>
      </div>
    )
  }
}

export default Room
