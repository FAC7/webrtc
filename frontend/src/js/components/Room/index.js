import React from 'react'
// import MentorList from './MentorList'

class Room extends React.Component {

  componentDidMount () {
    //ajax call to PBX API for info on all contacts in the room
    initialisePBX(this.props.pbxUsername, this.props.pbxpassword)
  }

  render () {
    return (
      <div>hello</div>
    )
  }
}

export default Room


const initialisePBX = (username, password) => {
  var rooms = {}
  var media = {}
  var accepted = {}
  var host = 'https://fac1.ipcortex.net'
  onAPILoadReady()
  function onAPILoadReady () {
    console.log("I'M READYYYY")
    /* Display a login prompt */
    // remove sethost if using the wrapper
    IPCortex.PBX.Auth.setHost('https://fac1.ipcortex.net')
    IPCortex.PBX.Auth.login({username: username, password: password}).then(
      function () {
        console.log(TAG, 'Login successful')
        /* Get the API to start collecting data */
        IPCortex.PBX.startFeed().then(
          function () {
            console.log(TAG, 'Live data feed started')
            // startTask()
          },
          function () {
            console.log(TAG, 'Live data feed failed')
          }
        )
      },
      function () {
        console.log(TAG, 'Login failed')
      }
    )
  }

}
