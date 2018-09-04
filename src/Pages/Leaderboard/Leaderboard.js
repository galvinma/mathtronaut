import React from 'react'
import axios from 'axios';
import {
  Grid,
  Row,
  Col,
  Table,
} from 'react-bootstrap';

// css
import './Leaderboard.css';

// redux
import store from '../.././Store/store'
import { getLocation } from '../.././Actions/actions'

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: ["Loading...",]
    };
  }
  componentDidMount() {
    store.dispatch(getLocation({
      location: "LEADERBOARD",
    }))

    axios.get('http://127.0.0.1:5000/api/v1/leaderboard')
    .then((response) => {

       var l = [];
       for (var i = 0; i < response.data.length; i++)
       {
         var temp = [];
         temp.push(response.data[i].username)
         temp.push(response.data[i].score)
         l.push(temp)
       }
       this.setState({leaders: l})
     })
    .catch((error)=>{
       console.log(error);
    });
  }
  render() {
    return (
      <div id="leaderboard">
        <Grid>
          <Row className="show-grid">
            <Col sm={6} smOffset={3}>
              <Table responsive >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.leaders.map(function(row, i) {
                    return (
                      <tr>
                        <td>{i+1}</td>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                      </tr>
                    )})}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    )}
}
