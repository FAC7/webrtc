import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './views/App.js'
import Home from './views/Home/index.js'
import About from './views/About/index.js'
import Contact from './views/Contact/index.js'
import MentorDashboard from './views/MentorDashboard/index.js'
import MenteeDashboard from './views/MenteeDashboard/index.js'
import MentorSignup from './views/MentorSignup/index.js'
import MenteeSignup from './views/MenteeSignup/index.js'
import EmergencyDashboard from './views/EmergencyDashboard/index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/mentor-dashboard' component={MentorDashboard} />
    <Route path='/mentee-dashboard' component={MenteeDashboard} />
    <Route path='/mentor-signup' component={MentorSignup} />
    <Route path='/mentee-signup' component={MenteeSignup} />
    <Route path='/urgent' component={EmergencyDashboard} />
  </Route>
)
