import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";
import { FourOhFour } from "./FourOhFour";

class Question extends Component {
  handleAnswer = (e, answer) => {
    e.preventDefault();
    const { dispatch, id, authedUser } = this.props;
    dispatch(
      handleAnswerQuestion({
        authedUser: authedUser,
        qid: id,
        answer: answer,
      })
    );
  };

  render() {
    const { authedUser, questions, users, id } = this.props;
    const validId = Object.keys(questions).includes(id);

    if (validId !== true) {
      return <FourOhFour />;
    } else {
      const disabled =
        questions[id].optionOne.votes.includes(authedUser) ||
        questions[id].optionTwo.votes.includes(authedUser);
      const votes1 = questions[id].optionOne.votes.length;
      const votes2 = questions[id].optionTwo.votes.length;
      return (
        <div className="question">
          <h1>Would you rather</h1>
          <div className="author">
            by{" "}
            <div className="question-circle">
              <img
                className="question-avatar"
                src={users[questions[id].author].avatarURL}
                alt="avatar"
              />
            </div>
          </div>
          <div className="options">
            <button
              className="option-box"
              disabled={disabled}
              onClick={(e) => this.handleAnswer(e, "optionOne")}
            >
              <div className="vote-percentage">
                {disabled
                  ? `${Math.round((votes1 / (votes1 + votes2)) * 100, 0)}%`
                  : ""}
              </div>
              <div className="vote-numbers">
                {disabled ? `number of votes ${votes1}` : ""}
              </div>
              <div className="question-option">
                {questions[id].optionOne.text}
              </div>
              {questions[id].optionOne.votes.includes(authedUser) ? (
                <div className="user-answer">My answer</div>
              ) : null}
            </button>
            <div className="or">Or</div>
            <button
              className="option-box"
              disabled={disabled}
              onClick={(e) => this.handleAnswer(e, "optionTwo")}
            >
              <div className="vote-percentage">
                {disabled
                  ? `${Math.round((votes2 / (votes1 + votes2)) * 100, 0)}%`
                  : ""}
              </div>
              <div className="vote-numbers">
                {disabled ? `number of votes ${votes2}` : ""}
              </div>
              <div className="question-option">
                {questions[id].optionTwo.text}
              </div>
              {questions[id].optionTwo.votes.includes(authedUser) ? (
                <div className="user-answer">My answer</div>
              ) : null}
            </button>
          </div>
        </div>
      );
    }
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
