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
