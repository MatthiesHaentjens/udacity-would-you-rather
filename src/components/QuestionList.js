import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class QuestionList extends Component {

  render() {
    const { questions, ids } = this.props;
    const sortedIds = ids
      .map((id) => {
        return { id: id, timestamp: questions[id].timestamp };
      })
      .sort((a, b) => b.timestamp - a.timestamp);
    console.log(sortedIds);

    return (
      <div className="questions">
        {sortedIds.map((item) => {
          return (
            <Link
              to={`/question/${item.id}`}
              key={item.id}
              className="question-link"
            >
              <div>{questions[item.id].optionOne.text} Or ...</div>
              <div>Asked on {new Date(questions[item.id].timestamp).toLocaleString()}</div>
            </Link>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions: questions,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionList));
