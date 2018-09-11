import React from 'react'
import lifecycle from 'react-pure-lifecycle';
import { Link } from 'react-router-dom';
import {
  Button,
  ButtonToolbar,
} from 'react-bootstrap';

// components
import VerticalSpacer40 from '../.././Components/VerticalSpacer/VerticalSpacer40'

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
      <div id="praceticemenu">
        <VerticalSpacer40 />
        <div className="buttonwrapper">
          <ButtonToolbar>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(1)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">1</span></Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(2)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">2</span></Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(3)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">3</span></Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(4)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">4</span></Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(5)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">5</span></Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(6)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">6</span></Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(7)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">7</span></Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(8)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">8</span></Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(9)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">9</span></Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(10)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">10</span></Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(11)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">11</span></Button>
            <Button bsStyle="link" className="practicebutton" bsSize="large" type="button" onClick={() => {updatePracticeNumber(12)}} componentClass={Link} href="/practicemode" to="/practicemode"><span className="practicebutton">12</span></Button>
          </ButtonToolbar>
        </div>
      </div>
    )

export default lifecycle(methods)(PracticeMenu);
