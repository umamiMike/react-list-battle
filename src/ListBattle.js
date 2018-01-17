import React, { Component } from 'react';
import ListElement from './ListElement.js';

export default class ListBattle extends Component {
  constructor(){
    super();//TODO: I really dont remember what super is  for 

    this.Competitors = ["apples","oranges","bananas"];
//    this.Competitors.forEach(function(element){
//      element.initCompetition(element,this.competitors);
//
//    })
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
      <ListElement message="snarf"/>
      <ListElement message="snuggles" />
    </div>
        ) 
  }
}

