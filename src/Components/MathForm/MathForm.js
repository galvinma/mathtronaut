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
        <Col sm={6} smOffset={3}>
          <div id="math_form_container">
            <Jumbotron className="math_form">
              <div>
                <div id="game_entry">PRESS ENTER</div>
                <input id="game_answer" className="answer"/>
              </div>
            </Jumbotron>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);
export default MathForm
