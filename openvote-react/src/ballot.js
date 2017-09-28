import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import Contest from './contest.js';
// import Election from './election.js';
import './Form.css';

class Contest extends React.Component {
  render() {
    const contest = this.props.contest;
    const choices = this.props.choices;

    return (
      <FormGroup tag="fieldset">
        <legend> Contest: </legend>
        {choices}
      </FormGroup>
    );
  }
}

class Choice extends React.Component {
    render() {
      const choice = this.props.choice;
      
    return (
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" />{choice}
        </Label>
      </FormGroup>
    );
  }
}

class ContestList extends React.Component {
  render() {
    const items = [];
    let lastName = null;
  
    this.props.contests.forEach((contest) => {
      items.push(
        <Contest
          Contest={contest}
          key={contest.name} />
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Form className="col-md-12">
            <div>{items}</div>
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

export default class Ballot extends React.Component {
  render() {

  return (
    <ContestList contests={this.props.contests} />
    )
  }
}

const CONTESTS =[
  {name: "President", choices: [ 'Bob', 'Jim', 'Bill' ]},
  {name: "Senator", choices: [ 'Mary', 'jane', 'Sue' ]},
  {name: "Representative", choices: [ 'Moe', 'Larry', 'Curley' ]}
]
