import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

const styles = {
  textAlign: 'center',
  margin: '4em auto'
}
const repoLink = 'https://github.com/FAC7/webrtc'

export default () => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <a href={repoLink} target='_blank'>
            <h3>Get in touch via our repo!</h3>
          </a>
        </Col>
      </Row>
    </Grid>
  )
}
