import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'


class ProfilePage extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={1}></Col>
          <Col xs={10}>
            <h1> {this.props.username}</h1>
            <p> gender: {this.props.gender}</p>
            <p> age: {this.props.age}</p>
            <p> profession: {this.props.profession}</p>
            <ul> <h5>topics: </h5> {this.props.topics.map((topic)=>{
                return <p>{topic}</p>
              })}</ul>
            <h4>some things about me: </h4>
            <p> {this.props.aboutme}</p>
          </Col>
        </Row>
      </Grid>
    )
    }
}

ProfilePage.propTypes = {

}

ProfilePage.defaultProps = {
  username: 'smellyAndrew',
  age: 5,
  gender: 'female',
  profession: 'beingAndrew',
  topics: ['Andrew', 'Andrews greatness', 'my glossy soft head of hair'],
  aboutme: 'I am da Bomb'
}

export default ProfilePage
