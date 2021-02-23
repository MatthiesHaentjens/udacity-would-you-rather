import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Question extends Component {
  render() {
    console.log(this.props);
    const { authedUser, questions, users, id } = this.props;
    const votes1 = questions[id].optionOne.votes.length;
    const votes2 = questions[id].optionTwo.votes.length;

    return (
      <div className="question">
        <h1>Would you rather</h1>
        <div className="author">by {users[authedUser].name}</div>
        <div className="options">
          <button className="option-box">
            <div className='vote-percentage'>{Math.round((votes1 / (votes1 + votes2)) * 100, 0)}%</div>
            <div className='vote-numbers'>number of votes {votes1}</div>
            <div className='question-option'>{questions[id].optionOne.text}</div>
          </button>
          <div className='or'>Or</div>
          <button className="option-box">
            <div className='vote-percentage'>{Math.round((votes2 / (votes1 + votes2)) * 100, 0)}%</div>
            <div className='vote-numbers'>number of votes {votes2}</div>
            <div className='question-option'>{questions[id].optionTwo.text}</div>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
  return {
    id,
    authedUser,
    users,
    questions,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
