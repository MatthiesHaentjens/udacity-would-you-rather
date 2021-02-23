import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";

class Question extends Component {
  state = {
    votes1: 0,
    votes2: 0,
    disabled: false,
  };

  componentDidMount() {
    const { questions, id, authedUser } = this.props;
    const answered =
      questions[id].optionOne.votes.includes(authedUser) ||
      questions[id].optionTwo.votes.includes(authedUser);
    if (answered === true) {
      this.setState({
        votes1: questions[id].optionOne.votes.length,
        votes2: questions[id].optionTwo.votes.length,
        disabled: true,
      });
    }
  }

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
    const { votes1, votes2, disabled } = this.state;
    
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
            onClick={(e) => this.handleAnswer(e, 'optionOne')}
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
            onClick={(e) => this.handleAnswer(e, 'optionTwo')}
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
