
//
//
// function processContact (contact) {
//   /* Don't process contacts that match the logged in user */
//   if (contact.cID == IPCortex.PBX.Auth.id)
//     return
//   var element = document.getElementById(contact.cID)
//   /* Return early if contact exists */
//   if (element) {
//     /* Remove offline contacts */
//     /* if ( ! contact.canChat && element.parentNode )
//     	element.parentNode.removeChild(element); */
//     return
//   }
//   /* Create online contact */
//   if (contact.canChat) {
//     // Create a Video Chat Button 'offer', add a listener
//     offer.addEventListener('click',
//       function () {
//         navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(
//           /* Grab the user media */
//           function (stream) {
//             /* Check to see if a room already exists to start video on */
//             for ( var roomID in rooms) {
//               if (rooms[roomID].cID != contact.cID)
//                 continue
//               /* Listen for updates on the Av instance */
//               rooms[roomID].videoChat(stream).addListener('update', processFeed)
//               return
//             }
//             /* No room to start video, store stream and contact ID and open a new room */
//             media = {cID: contact.cID, stream: stream}
//             contact.chat()
//           }
//         ).catch(
//           function () {
//             console.log('getUserMedia failed')
//           }
//         )
//       }
//     )
//   }
// }
//
// function startTask () {
//   /* Start API collecting data */
//   IPCortex.PBX.startFeed().then(
//     function () {
//       console.log('Live data feed started')
//       /* API is ready, loop through the list of contacts */
//       IPCortex.PBX.contacts.forEach(
//         function (contact) {
//           /* Listen for updates incase the contact changes state */
//           contact.addListener('update', processContact)
//           processContact(contact)
//         }
//       )
//       /* Enable chat to allow feature (video negotiation) messages to be exchanged */
//
//     },
//     function () {
//       console.log('Live data feed failed')
//     }
//   )
// }
