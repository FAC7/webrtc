import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import Videobox from './components/Videobox/index.js'
import Chatbox from './components/Chatbox/index.js'

export default () => {
  return (
<div>
<Videobox/>
<Chatbox/>
</div>
  )
}
