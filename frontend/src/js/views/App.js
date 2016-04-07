import React from 'react'
import Header from '../components/Header/index.js'
import Footer from '../components/Footer/index.js'

import '../../scss/style.scss'

const options = {
  menuItems: ['about', 'contact'],
  logoUrl: 'img/rhino.png'
}

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header menuItems={options.menuItems} logoUrl={options.logoUrl} fluid />
        <div id="contacts">
    		  <div class="contacts-title">Contacts</div>
    	  </div>
        <div className='header-spacing'></div>
          {this.props.children}
        <Footer logoUrl={options.logoUrl} />
      </div>
    )
  }
}
