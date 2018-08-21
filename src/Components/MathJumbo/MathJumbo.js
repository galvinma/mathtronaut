import React from 'react'
import {
  Grid,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap';
import './MathJumbo.css';

export default class MathJumbo extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={4} smOffset={4}>
            <Jumbotron>
              <div className="math_jumbo">
                  <h1>12 x 4</h1>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}
