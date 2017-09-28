import React from 'react';
import { FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css';

export default class Choice extends React.Component {
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