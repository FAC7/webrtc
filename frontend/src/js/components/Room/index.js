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
  /* prepare a list of icon names for the states: idle, busy, ringing, busy+ringing */
console.log('AAAAAAAAA', IPCortex.PBX.contacts)
// var states = ["call_end", "phone", "ring_volume", "phone"];
//
// /* Inject the list of contacts into the page */
// var listElem = document.getElementById('list');
// IPCortex.PBX.contacts.forEach(function (contact) {
//     var contElem = document.createElement('li');
//     contElem.innerHTML = '<a href="#">' +
//                 '<i class="material-icons">' + states[0] + '</i>&nbsp;' +
//                 contact.uname + '(' + contact.cID + '), ' + contact.name +
//                 '</a>';
//     listElem.appendChild(contElem);
//     var icon = contElem.getElementsByTagName('i')[0];
//     contact.addListener('update', function (cntct) {
//         /* Each time this contact is updated, this method will be called.
//          * the contElem variable is scoped locally, so will remain in scope
//          * meaning that this callback will have access to the right icon to
//          * update.
//          */
//         icon.innerHTML = states[cntct.blf];
//     });
// });
}
