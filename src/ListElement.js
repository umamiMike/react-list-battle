import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListElement extends Component {

        state = {
          score: 0,
        }
  constructor(props) {
    super(props);
    this.score = "0";
    this.id = guid();

    this.name = this.props.name;
    }

    printIdButtonClicked = () => {
            this.setState(this.win);
  }

  win(state) {

          return { ...state, score: state.score + 1 };
  }

  //initCompetition was for setting initializing  a collection of all of this elements
  //competitors.
  render () {
    return (
      //should return some html stuff here
      <div className="listItem">
        <h1>
          My name is:  { this.name }
        </h1>
        <h1>
          The score is:  { this.state.score }
        </h1>
        <p>
        The state id is: { this.state.id }
        </p>
        <button onClick={this.printIdButtonClicked}>
        Increment Me
        </button>
      </div>
        ) 
  }

}

ListElement.proptypes = {

        score: PropTypes.int,
        id:    PropTypes.func

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

