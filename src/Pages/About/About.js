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
          <Col smOffset={2} sm={8} mdOffset={2} md={8}>
            <div id="about_container">
              <Jumbotron className="about">
                <div id="about_info">Mathtronaut is an<a className="aboutlink" target="_blank" href="https://github.com/galvinma/mathtronaut">open source</a> space themed website designed to make learning mathmatics fun. If you like mathtronaut, please consider donating.</div>
                <br />
                <div>
                <ul id="donation_list">
                  <li id="coffee"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/Wd0ji9Y6O"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee" /><span id="coffee_span">Buy me a coffee</span></a></li>
                  <br />
                  <li id="ether">eth: 0x2Fd28424005a969Ac799953aF1e10E8A536DF8EE</li>
                  <li id="btc">btc: 1PUknv1RUpN1zmVQhFDnLrtmn8hSdU1VUB</li>
                </ul>
                </div>
                <br />
                <div>Questions or comments? You can reach the developer at mathtronaut.game@gmail.com</div>
              </Jumbotron>
            </div>
          </Col>
      </Row>
    </Grid>
  </div>
)

export default lifecycle(methods)(About);
