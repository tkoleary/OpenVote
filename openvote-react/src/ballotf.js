import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Contest from './contest.js';
import Election from './election.js';
import './Form.css';

function Ballot(props) {
  return <h1>{props.ballotName}</h1>;
}

export default class Ballotform extends React.Component {
  const ContestList = [];
    let lastCategory = null;
  render() {
    return (
      <div className="container">
        <div className="row">
          <Ballot ballotName="General Election" />
        </div>
        <div className="row">
          <Form className="col-md-12">
            <div>
              <ContestList contests={this.props.contests} />
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