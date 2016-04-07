import React from 'react'
import videoHelpers from './../../../helpers/videoHelpers.js'

export default () => {
  return (
    <div>
      <video id="phone" autoplay></video>
      <button type="button" id="call">Call</button>
      <button type="button" id="hangup">Hangup</button>
    </div>
  )
}
