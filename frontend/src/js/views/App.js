import React from 'react'
import Header from '../components/Header/index.js'
import Footer from '../components/Footer/index.js'

import '../../scss/style.scss'

const options = {
  menuItems: ['about', 'contact'],
  logoUrl: '/img/confidant.png'
}

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {isLoggedIn: false}

    this.mapStateToChildren = this.mapStateToChildren.bind(this)
    this.MUTATE_GLOBAL_STATE = this.MUTATE_GLOBAL_STATE.bind(this)
  }
  mapStateToChildren (children) {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        appState: this.state,
        MUTATE_GLOBAL_STATE: this.MUTATE_GLOBAL_STATE
      })
    })
  }
  MUTATE_GLOBAL_STATE (newState) {
    this.setState(newState)
  }
  render () {
    return (
      <div>
        <Header menuItems={options.menuItems} logoUrl={options.logoUrl} fluid />
          {this.mapStateToChildren(this.props.children)}
        <Footer logoUrl={options.logoUrl} />
      </div>
    )
  }
}
