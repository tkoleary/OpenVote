import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import Choice from './choice.js';
import './Form.css';

const CONTESTS =[
  {name: "President", choices: [ 'Bob', 'Jim', 'Bill' ]},
  {name: "Senator", choices: [ 'Mary', 'jane', 'Sue' ]},
  {name: "Representative", choices: [ 'Moe', 'Larry', 'Curley' ]}
]

export default class Contest extends React.Component {
  render() {
  	const contest = this.props.contest;
    const name = contest.name;

	  return (
	    <FormGroup tag="fieldset">
	      <legend> Contest: {contest.name} </legend>
	      {contest.choices}
	  	</FormGroup>
	  );
	}
}
