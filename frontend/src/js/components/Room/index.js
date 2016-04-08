import React from 'react'
// import MentorList from './MentorList'

class Room extends React.Component {

  componentDidMount () {
    console.log('logging')
    //ajax call to PBX API for info on all contacts in the room
    initialisePBX('fac21b', '2y5x85db')
  }
  render () {
    return (
      <div>hello</div>
    )
  }
}

export default Room

var currentRoom;
var rooms = {}
var media = {}
var accepted = {}
const initialisePBX = (username, password) => {
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
var chatEnabled = IPCortex.PBX.enableChat(
  function (room) {
    /* Listen for updates to clean up dead rooms */
    currentRoom = room
    room.addListener('update',
      function (room) {
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
      room.videoChat(media.stream).addListener('update', processFeed)

      media = {}
    }
    rooms[room.roomID] = room
  }
)
if (chatEnabled) {
  console.log('Chat enable, enabling av feature')
  /* Register to receive new Av instances */
  IPCortex.PBX.enableFeature(
    'av',
    function (av) {
      /* Listen for updates to the Av instance */
      av.addListener('update', processFeed)
      processFeed(av , currentRoom)
    },
    ['chat']
  )
}

var submit = document.getElementById('Submit')
var input = document.getElementById('textbox')
submit.addEventListener('click', function(e){
  console.log('room (when clicking)-->', currentRoom)

  currentRoom.post(input.value)
  input.value = ''
})

function processFeed (av, room) {
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
      /* If the remote party is offering create an invite
               */
      if (accepted[av.id]) // We have already accepted - return
        return
      console.log('Offer recieved from ' + av.remoteMedia[id].cN)
      /* Mark the offer as accepted as we may get another
         update with the 'offer' state still set */
      accepted[av.id] = true
      // POP UP AN 'accept' BUTTON WITH ONCLICK

      hangup.addEventListener('click', function(){
        console.log('rejecting call')
        av.reject()
      });

      accept.addEventListener('click',
        function () {
          console.log('accepting call')
          /* Grab the user media and accept the offer with the returned stream */
          navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(
            function (stream) {
              av.accept(stream)
            }
          ).catch(
            function () {
              console.log('getUserMedia failed')
            }
          )
        }
      )
      // this is a convient way to keep things in scope
      av.addListener('update',
        function (av) {
          // if (av.state == 'closed')
          // get rid of video...
            // invite.parentNode.removeChild(invite)
        }
      )
    } else if (av.remoteMedia[id].status == 'connected') {
      console.log('New remote media source ', av.remoteMedia[id])
      /* Create a new video tag to play/display the remote media */
      hangup.addEventListener('click', function(){
        room.leave()
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
