import React from 'react'
import {Jumbotron, Grid, Col, Row, Button, PageHeader} from 'react-bootstrap'
import {browserHistory} from 'react-router'

export default class Home extends React.Component {
  onUrgentClick () {
    browserHistory.push('/chat/urgent')
  }

  onMenteeSignupClick () {
    browserHistory.push('/signup/mentee')
  }

  onMentorSignupClick () {
    browserHistory.push('/signup/mentor')
  }

  render () {
    return (
      <div className='content-wrap' style={{marginBottom: '200px'}}>
        <Jumbotron>
          <Grid>
            <Row style={styles.row}>
              <Col xs={10} xsOffset={1}>
                <PageHeader style={styles.header}>
                  Mentoring and Counselling Services
                </PageHeader>
              </Col>
            </Row>
            <Row>
              <Col xs={8} xsOffset={2}>
                <Button
                  style={styles.button}
                  bsStyle='danger'
                  bsSize='lg'
                  onClick={this.onUrgentClick}
                  block
                >
                  Talk to someone right now?
                </Button>
                <Button
                  style={styles.button}
                  bsStyle='primary'
                  bsSize='lg'
                  onClick={this.onMenteeSignupClick}
                  block
                >
                  Sign up for regular mentoring
                </Button>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        <Grid>
          <Row style={styles.row} className='text-center'>
            <Col xs={8} xsOffset={2}>
              <h2 style={styles.header}>Sign up as a Mentor</h2>
              <p>Create a profile so that people in need of mentoring can find you</p>
            </Col>
          </Row>
          <Row>
            <Col xs={8} xsOffset={2}>
              <Button
                style={styles.button}
                bsStyle='primary'
                bsSize='lg'
                onClick={this.onMentorSignupClick}
                block
              >
                Sign-up / Login
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const styles = {
  header: {
    textAlign: 'center',
  },
  button: {
    height: '4em'
  },
  row: {
    marginBottom: '80px'
  }
}
