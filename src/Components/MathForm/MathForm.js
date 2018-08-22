import React from 'react'
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import './MathForm.css';

export default class MathForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            inputvalue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
      this.setState({
          inputvalue: event.target.value
      })
    }

    render() {
      return (
        <Grid>
          <Row className="show-grid">
            <Col sm={4} smOffset={4}>
                <div className="math_form">
                  <form>
                    <FormGroup>
                    <FormControl
                      className="answer"
                      type="text"
                      value={this.state.value}
                      placeholder=""
                      onChange={this.handleChange}
                    />
                    </FormGroup>
                  </form>
                </div>
            </Col>
          </Row>
        </Grid>
      );
    }
  }
