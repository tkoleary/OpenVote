import React, {Component} from 'react';
import generalElection from './data/generalElection.json';

export default class Election extends Component {
  render () {
    const elem = Election.contest;
    return (
     <ul>
       {Object.keys(elem).map((v, i) => <li key={i}>{v} {Election[v]}</li> )}
     </ul>
    )
  }
}