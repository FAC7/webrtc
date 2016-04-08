import React from 'react'
import {Jumbotron, Grid, Col, Row, Button, PageHeader} from 'react-bootstrap'
import {Link} from 'react-router'

export default class Home extends React.Component {
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
                <Link to={'/chat/urgent'}>
                  <Button
                    style={styles.button}
                    bsStyle='danger'
                    bsSize='lg'
                    block
                  >
                    Talk to someone right now?
                  </Button>
                </Link>
                <a href={'/auth/signup/mentor'}>
                  <Button
                    style={styles.button}
                    bsStyle='primary'
                    bsSize='lg'
                    block
                  >
                    Sign up for regular mentoring
                  </Button>
                </a>
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
              <a href={'/auth/signup/mentee'}>
                <Button
                  style={styles.button}
                  bsStyle='primary'
                  bsSize='lg'
                  block
                >
                  Sign-up / Login
                </Button>
              </a>
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
