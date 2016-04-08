import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

const styles = {
  textAlign: 'center',
  marginBottom: '10em',
  img: {
    outer: {
      width: '80%',
      maxWidth: '350px',
      margin: '3em auto 0'
    },
    inner: {
      width: '100%'
    }
  }
}

export default () => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <div style={styles.img.outer}>
            <img style={styles.img.inner} src='img/confidant-black.png' />
          </div>
          <p>Confidant is a safe space to discuss any worries or anything you want to talk about with a mentor</p>
          <p>You can talk with a mentor face to face via video link, audio or just text chat, whichever you're most comfortable with</p>
        </Col>
      </Row>
    </Grid>
  )
}
