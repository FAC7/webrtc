import React from 'react'
import {Button} from 'react-bootstrap'

class MenteesProfilePage extends React.Component {
  render () {
    return (
      <div style={{padding: '0 2em'}}>
        <h3> {this.props.firstname} {this.props.lastname}</h3>
        <p>gender: {this.props.gender}</p>
        <p>age: {this.props.age}</p>
        <p>profession: {this.props.profession}</p>
        <p>topics: </p>
        <ul>
          {this.props.topics.map((topic, i) => {
            return <li key={i}>{topic}</li>
          })}
        </ul>
        <p>some things about me: </p>
        <p> {this.props.aboutme}</p>
        <Button> Request a chat </Button>
      </div>
    )
  }
}

MenteesProfilePage.propTypes = {
  firstname: React.PropTypes.string.isRequired,
  lastname: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired,
  gender: React.PropTypes.string.isRequired,
  profession: React.PropTypes.string.isRequired,
  topics: React.PropTypes.array.isRequired,
  aboutme: React.PropTypes.string.isRequired
}

MenteesProfilePage.defaultProps = {
  firstname: 'Ivan',
  lastname: 'King of Puns',
  age: 10,
  gender: 'male',
  profession: 'beingAndrew',
  topics: ['Andrew', 'Andrews greatness', 'my glossy soft head of hair'],
  aboutme: 'I am da Bomb'
}

export default MenteesProfilePage
