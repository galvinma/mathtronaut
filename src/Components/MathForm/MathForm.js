import React from 'react'
import {
  Jumbotron,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

// css
import './MathForm.css';

const MathForm = () => (
  <div id="form">
    <Grid>
      <Row className="show-grid">
        <Col sm={4} smOffset={4}>
          <Jumbotron className="math_form">
            <div>
              <div id="game_entry">PRESS ENTER TO PLAY</div>
              <input id="game_answer" className="answer"/>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Grid>
  </div>
);
export default MathForm
