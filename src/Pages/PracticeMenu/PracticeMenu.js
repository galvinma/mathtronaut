import React from 'react'
import lifecycle from 'react-pure-lifecycle';
import { Link } from 'react-router-dom';
import {
  Button,
  ButtonToolbar,
} from 'react-bootstrap';

// css
import './PracticeMenu.css';

// redux
import store from '../.././Store/store'
import { getLocation } from '../.././Actions/actions'

// functions
import { updatePracticeNumber } from '../.././Utils/numbers'

const componentDidMount = () => {
  store.dispatch(getLocation({
    location: "PRACTICEMENU",
  }))

};

const methods = {
  componentDidMount
};

const PracticeMenu = () => (
      <div>
        <div className="buttonwrapper">
          <ButtonToolbar>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(1)}} componentClass={Link} href="/practicemode" to="/practicemode">1</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(2)}} componentClass={Link} href="/practicemode" to="/practicemode">2</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(3)}} componentClass={Link} href="/practicemode" to="/practicemode">3</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(4)}} componentClass={Link} href="/practicemode" to="/practicemode">4</Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(5)}} componentClass={Link} href="/practicemode" to="/practicemode">5</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(6)}} componentClass={Link} href="/practicemode" to="/practicemode">6</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(7)}} componentClass={Link} href="/practicemode" to="/practicemode">7</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(8)}} componentClass={Link} href="/practicemode" to="/practicemode">8</Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(9)}} componentClass={Link} href="/practicemode" to="/practicemode">9</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(10)}} componentClass={Link} href="/practicemode" to="/practicemode">10</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(11)}} componentClass={Link} href="/practicemode" to="/practicemode">11</Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(12)}} componentClass={Link} href="/practicemode" to="/practicemode">12</Button>
          </ButtonToolbar>
        </div>
      </div>
    )

export default lifecycle(methods)(PracticeMenu);
