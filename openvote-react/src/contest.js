import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import Choice from './choice.js';
import './Form.css';

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
