import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
  render() {
    console.log(this.props)
    const { authedUser, questions, users, id } = this.props;
    return (
        <div className="question">
          <h1>Would you rather</h1>
          <div className="author">{users[authedUser].name}</div>
          <div className="options">
            <div className="option-one">{questions[id].optionOne.text}</div>
            <div>Or</div>
            <div className="optiion-two">{questions[id].optionTwo.text}</div>
          </div>
        </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  return {
    id,
    authedUser,
    users,
    questions,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
