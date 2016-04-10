import React from 'react'
import {Jumbotron, Grid, Col, Row, Button} from 'react-bootstrap'
import Logo from '../../components/Logo/index.js'
import {Link} from 'react-router'

export default class Home extends React.Component {
  render () {
    return (
      <div className='content-wrap' style={{marginBottom: '200px', marginTop:'100px', textAlign: 'center'}}>
          <Grid>
            <Col xs={10} xsOffset={1}/>
            <Logo imgUrl='img/confidant-black.png' maxWidth='300px' />
            <p>A safe space to talk to a mentor</p>
            <Row style={{marginTop: '5em'}}>
              <Col xs={8} xsOffset={2}>
                <Link to={'/mentor-dashboard'}>
                  <Button
                    style={styles.button}
                    bsStyle='info'
                    bsSize='lg'
                    block
                  >
                    login as mentor
                  </Button>
                </Link>
                <a href={'/mentee-dashboard'}>
                  <Button
                    style={styles.button}
                    bsStyle='primary'
                    bsSize='lg'
                    block
                  >
                    login as mentee
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
