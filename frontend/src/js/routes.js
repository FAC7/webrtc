import React from 'react'
import {Route, IndexRoute} from 'react-router'
import MentorDashboard from './components/MentorDashboard/index.js'
import App from './views/App.js'
import Home from './views/Home/index.js'
import About from './views/About/index.js'
import Contact from './views/Contact/index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/mentor-dashboard' component={MentorDashboard} />
  </Route>
)
