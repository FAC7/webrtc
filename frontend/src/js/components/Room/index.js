import React from 'react'
// import MentorList from './MentorList'

class Room extends React.Component {

  componentDidMount () {
    //ajax call to PBX API for info on all contacts in the room
    initialisePBX('fac24b', 'wy3xxbsj')
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

  function onAPILoadReady () {
    console.log("@@@@@@@@@@@@@@@")
    /* Display a login prompt */
    // remove sethost if using the wrapper
    IPCortex.PBX.Auth.setHost('https://fac1.ipcortex.net')
    IPCortex.PBX.Auth.login({username: username, password: password}).then(
      function () {
        // console.log(TAG, 'Login successful')
        /* Get the API to start collecting data */
        IPCortex.PBX.startFeed().then(
          function () {
            // console.log(TAG, 'Live data feed started')

            // startTask()
            runApp ()
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
  }
  onAPILoadReady()

}

const runApp = () => {
  // AJAX call to our api
  const mentors = [{
    
  }]
  console.log('AAAAAAAAA', IPCortex.PBX.contacts)

}
