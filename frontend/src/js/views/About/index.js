import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Logo from '../../components/Logo/index.js'

export default () => {
  return (
    <Grid style={{textAlign: 'center', margin: '3em auto 12em auto'}}>
      <Row>
        <Col xs={2}/>
        <Col xs={8}>
          <Logo imgUrl='img/confidant-black.png' maxWidth='300px' />
          <h3 className='italic-header'>'a person with whom one shares a secret
            or private matter,
          </h3>
          <h3 style={{marginBottom: '2em'}} className='italic-header'>
            trusting them not to repeat it to others'
          </h3>
          <p>Confidant is a safe space to discuss any worries
            or anything you want to talk about with a mentor
          </p>
          <p>You can talk with a mentor face to face
            via video link, audio or just text chat,
            whichever you're most comfortable with
          </p>
        </Col>
        <Col xs={2}/>
      </Row>
    </Grid>
  )
}
