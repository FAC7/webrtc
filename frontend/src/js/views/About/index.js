import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Logo from '../../components/Logo/index.js'

export default () => {
  return (
    <Grid style={{textAlign: 'center', marginTop: '2em'}}>
      <Row>
        <Col xs={12}>
          <Logo imgUrl='img/confidant-black.png' maxWidth='300px' />
          <p>Confidant is a safe space to discuss any worries
            or anything you want to talk about with a mentor
          </p>
          <p>You can talk with a mentor face to face
            via video link, audio or just text chat,
            whichever you're most comfortable with
          </p>
        </Col>
      </Row>
    </Grid>
  )
}
