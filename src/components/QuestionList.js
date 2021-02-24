import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class QuestionList extends Component {

  render() {
    const { questions, users, ids } = this.props;
    const sortedIds = ids
      .map((id) => {
        return { id: id, timestamp: questions[id].timestamp };
      })
      .sort((a, b) => b.timestamp - a.timestamp);

    return (
      <div className="questions">
        {sortedIds.map((item) => {
          return (
            <Link
              to={`/question/${item.id}`}
              key={item.id}
              className="question-link"
            >
              <div>Would you rather {questions[item.id].optionOne.text} or ...&nbsp;</div>
              <div>asked by {users[questions[item.id].author].name} on {new Date(questions[item.id].timestamp).toLocaleDateString()}</div>
            </Link>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionList));
