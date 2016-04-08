var rooms = {}
var media = {}
var accepted = {}

var host = 'https://fac1.ipcortex.net'

function onAPILoadReady () {
  console.log("I'M READYYYY")
  /* Display a login prompt */
  IPCortex.PBX.Auth.setHost('https://fac1.ipcortex.net')
  IPCortex.PBX.Auth.login().then(
    function () {
      console.log('Login successful')
      /* Get the API to start collecting data */
      IPCortex.PBX.startFeed().then(
        function () {
          console.log( 'Live data feed started')
          startTask()
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

function processFeed (av) {
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
      accept.addEventListener('click',
        function () {
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
      /* Listen for updates to clean up the invite if the far end cancels,
      this is a convient way to keep things in scope*/
      av.addListener('update',
        function (av) {
          if (av.state == 'closed')
            invite.parentNode.removeChild(invite)
        }
      )
    } else if (av.remoteMedia[id].status == 'connected' && ! video) {
      console.log('New remote media source ' + av.remoteMedia[id])
      /* Create a new video tag to play/display the remote media */
      video = document.getElementById('phone')
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

function processContact (contact) {
  /* Don't process contacts that match the logged in user */
  if (contact.cID == IPCortex.PBX.Auth.id)
    return
  var element = document.getElementById(contact.cID)
  /* Return early if contact exists */
  if (element) {
    /* Remove offline contacts */
    /* if ( ! contact.canChat && element.parentNode )
    	element.parentNode.removeChild(element); */
    return
  }
  /* Create online contact */
  if (contact.canChat) {
    // Create a Video Chat Button 'offer', add a listener
    offer.addEventListener('click',
      function () {
        navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(
          /* Grab the user media */
          function (stream) {
            /* Check to see if a room already exists to start video on */
            for ( var roomID in rooms) {
              if (rooms[roomID].cID != contact.cID)
                continue
              /* Listen for updates on the Av instance */
              rooms[roomID].videoChat(stream).addListener('update', processFeed)
              return
            }
            /* No room to start video, store stream and contact ID and open a new room */
            media = {cID: contact.cID, stream: stream}
            contact.chat()
          }
        ).catch(
          function () {
            console.log('getUserMedia failed')
          }
        )
      }
    )
  }
}

function startTask () {
  /* Start API collecting data */
  IPCortex.PBX.startFeed().then(
    function () {
      console.log('Live data feed started')
      /* API is ready, loop through the list of contacts */
      IPCortex.PBX.contacts.forEach(
        function (contact) {
          /* Listen for updates incase the contact changes state */
          contact.addListener('update', processContact)
          processContact(contact)
        }
      )
      /* Enable chat to allow feature (video negotiation) messages to be exchanged */
      var chatEnabled = IPCortex.PBX.enableChat(
        function (room) {
          /* Listen for updates to clean up dead rooms */
          room.addListener('update',
            function (room) {
              if (rooms[room.roomID] && room.state == 'dead')
                delete rooms[room.roomID]
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
            processFeed(av)
          },
          ['chat']
        )
      }
    },
    function () {
      console.log('Live data feed failed')
    }
  )
}
