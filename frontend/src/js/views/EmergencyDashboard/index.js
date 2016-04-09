import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import MentorList from '../../components/MentorList/index.js'

export default class EmergencyDashboard extends React.Component {

  render () {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h2>Mentors</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}><MentorList /></Col>
        </Row>
      </Grid>
    )
  }
}
