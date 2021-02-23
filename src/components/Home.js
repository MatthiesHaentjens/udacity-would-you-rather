import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

class Home extends Component {
  state = {
    list: "answered",
  };

  render() {
    return (
      <div className="question-list">
        <div className="question-nav">
          <button
            className='button'
            onClick={() => this.setState({ list: "answered" })}
          >
            Answered
          </button>
          <button
            className='button'
            onClick={() => this.setState({ list: "unanswered" })}
          >
            Unanswered
          </button>
        </div>
        <hr />
        {this.state.list === "answered" ? (
          <QuestionList ids={this.props.answered}/>
        ) : this.state.list === "unanswered" ? (
          <QuestionList ids={this.props.unanswered}/>
        ) : (
          <div>Oeps something went wrong</div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answered = Object.keys(users[authedUser].answers);
  const unanswered = Object.keys(questions).filter(
    (id) => !answered.includes(id)
  );
  return {
    answered: answered,
    unanswered: unanswered,
  };
}

export default connect(mapStateToProps)(Home);
