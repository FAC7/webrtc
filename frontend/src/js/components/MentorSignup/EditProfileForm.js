import React from 'react'
import {Input, Grid, Row, Col, ButtonInput} from 'react-bootstrap'

export default (props) => {
  return (
    <Grid>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>
          <form action='/save-mentor-profile'>
            <h2>Mentor Profile</h2>
            <h4>Fill in your details</h4>
            <Input id='name' type='text' placeholder='name' required></Input>
            <Input id='username' type='text' placeholder='username' required></Input>
            <Input id='gender' type='text' placeholder='gender' required></Input>
            <Input id='age' type='text' placeholder='age' required></Input>
            <Input id='profession' type='text' placeholder='profession' required></Input>
            <Input id='topics' type='textarea' placeholder='topics' required></Input>
            <Input id='about-me' type='textarea' placeholder='about me' required></Input>
            <ButtonInput type='submit' value='save details'/>
          </form>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Grid>
  )
}
