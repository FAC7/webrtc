import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router'

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = {menuOpen: false}
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render () {
    return (
      <Navbar
        expanded={this.state.menuOpen}
        onToggle={this.toggleMenu}
        className='top-menu'
        fixedTop
      >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>
              <img src={this.props.logoUrl}></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse pullRight>
          <Nav pullRight>
            {this.props.menuItems.map(item => {
              return (
                <li
                  onClick={this.closeMenu}
                  role='presentation'
                  key={item + '-li'}
                >
                  <Link key={item} to={'/' + item}>{item}</Link>
                </li>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
