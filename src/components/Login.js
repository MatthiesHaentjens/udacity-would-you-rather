import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(e.target.value));
  };
  render() {
    return (
      <div className="login-form">
        <div className="login-form-header">Please Sign In</div>
        <select id="user-select" onChange={this.handleSubmit}>
          <option value="login">Choose your user</option>
          {this.props.userIds.map((id) => {
            return (
              <option key={id} value={id}>
                {id}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Login);
