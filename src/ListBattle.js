import React, { Component } from 'react';
import ListElement from './ListElement.js';
import PropTypes from 'prop-types';

export default class ListBattle extends Component {
          state = {
                  winner: "", 
          }
  constructor(){
    super();//TODO: I really dont remember what super is  for 

    this.Competitors = [];
  }
  add(message){
    return new ListElement(message);
  }
  render () {
    return (
    <div>
      <h1>
        I am the ListBattle
      </h1>

      <p>
     The competitors are:  { this.ListElements }
      </p>
      <ListElement name="snarf"/>
      <ListElement name="snuggles" />
    </div>
        ) 
  }

}
ListBattle.proptypes = {

        Competitors: PropTypes.array

}
