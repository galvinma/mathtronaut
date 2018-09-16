import React from 'react'
import lifecycle from 'react-pure-lifecycle';
import {
  Grid,
  Col,
  Row,
  Jumbotron,
} from 'react-bootstrap';

// redux
import store from '../.././Store/store'
import { getLocation } from '../.././Actions/actions'

// css
import './About.css';

const componentDidMount = () => {
  store.dispatch(getLocation({
    location: "ABOUT",
  }))

};

const methods = {
  componentDidMount
};

const About = (props) => (
  <div>
    <Grid>
      <Row className="show-grid">
          <Col sm={6} md={6}>
            <Jumbotron>
            <div id="about_info">
              <div>Mathtronaut is an open source space themed website designed to make learning mathmatics fun. If you like mathtronaut, please consider donating:</div>
              <ul>
                <li id="ether">ether: 0x2Fd28424005a969Ac799953aF1e10E8A536DF8EE</li>
                <li id="btc">btc: 1PUknv1RUpN1zmVQhFDnLrtmn8hSdU1VUB</li>
              </ul>
              <div>If you have any questions or comments you can reach the developer at mathtronaut.game@gmail.com</div>
              </div>
            </Jumbotron>
          </Col>
      </Row>
    </Grid>
  </div>
)

export default lifecycle(methods)(About);
