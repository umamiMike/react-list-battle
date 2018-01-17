import React, { Component } from 'react';

export default class ListElement extends Component {

  constructor(props) {
    super(props);

    this.score = 0;
    this.id = guid();
    this.greeting = this.props.message;
    this.competitors = [];
    this.printId = function () {
    }
  }
  //initCompetition was for setting initializing  a collection of all of this elements
  //competitors.
  render () {
    return (

      //should return some html stuff here
      <div class="listItem">
        <h1>
          The greeting is:  { this.greeting }
        </h1>
        <p>
        The id is:  { this.id }
        </p>
        <button onClick={this.printId}>
        </button>
      </div>
        ) 

  }
}
//helper
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
