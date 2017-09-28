import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Contest from './contest.js';
import Election from './election.js';
import './Form.css';

function Ballot(props) {
  return <h1>{props.ballotName}</h1>;
}

export default class Ballot extends React.Component {
  render() {
    const ContestList = [];
    let lastContest = null;
  
    return (
      <div className="container">
        <div className="row">
          <Ballot ballotName="General Election" />
        </div>
        <div className="row">
          <Form className="col-md-12">
            <div>
              <ContestList contest={this.props.contest} />
            </div>
            <FormGroup>
              <Button>Review</Button>
              <Button>Submit</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}