import React from 'react'
import axios from 'axios';
import {
  Grid,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap';
import './MathJumbo.css';

export default class MathJumbo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamelogic: [],
  };
}
  componentDidMount() {
    axios.get('http://127.0.0.1:5000/api/v1/regularmode', {
      params: {
        num: 2
      }
    })
    .then(res => {
      const gamelogic = res.data;
      this.setState({ gamelogic });
  })
}
  render() {
    return (
      <div>
      <Grid>
        <Row className="show-grid">
          <Col sm={4} smOffset={4}>
            <Jumbotron>
              <div className="math_jumbo">
                { this.state.gamelogic.map(logic => <h2>{logic.gamelogic.numbers}</h2>)}
                <br />
                { this.state.gamelogic.map(logic => <h2>{logic.gamelogic.answer}</h2>)}
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>

      </div>
    )
  }
}
