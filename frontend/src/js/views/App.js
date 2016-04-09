import React from 'react'
import Header from '../components/Header/index.js'
import Footer from '../components/Footer/index.js'

import '../../scss/style.scss'

const options = {
  menuItems: ['about', 'contact'],
  logoUrl: 'img/confidant.png'
}

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header menuItems={options.menuItems} logoUrl={options.logoUrl} fluid />
          {this.props.children}
        <Footer logoUrl={options.logoUrl} />
      </div>
    )
  }
}
