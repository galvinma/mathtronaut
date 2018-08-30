import React from 'react'
import { connect } from "react-redux";
import {
  Grid,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap';

// css
import './MathNotification.css';

export default class MathNotification extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={4} smOffset={4}>
              <Jumbotron id="math_notification">
                <div className="notification_jumbo">
                  <p>Correct!</p>
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      </div>
    )}
}
