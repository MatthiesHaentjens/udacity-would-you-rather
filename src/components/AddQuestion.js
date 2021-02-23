import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

class AddQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };

  handleChangeOptionOne = (e) => {
    const optionOneText = e.target.value;
    this.setState(() => ({
      optionOneText,
    }));
  };

  handleChangeOptionTwo = (e) => {
    const optionTwoText = e.target.value;
    this.setState(() => ({
      optionTwoText,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, authedUser } = this.props;
    dispatch(
      handleAddQuestion({
        optionOneText: optionOneText,
        optionTwoText: optionTwoText,
        author: authedUser,
      })
    );
    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
      toHome: true,
    }));
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;
    if (toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="question">
        <h1>Would you rather</h1>
        <form className="add-question-from" onSubmit={this.handleSubmit}>
          <div className="options">
            <div className="option-box">
              <label htmlFor="option1">Option 1</label>
              <input
                id="option1"
                placeholder="Option 1"
                value={optionOneText}
                onChange={this.handleChangeOptionOne}
              />
            </div>
            <div className="or">Or</div>
            <div className="option-box">
              <label htmlFor="option2">Option 2</label>
              <input
                id="option2"
                placeholder="Option 2"
                value={optionTwoText}
                onChange={this.handleChangeOptionTwo}
              />
            </div>
          </div>
          <button type="submit">Save Question</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(AddQuestion));
