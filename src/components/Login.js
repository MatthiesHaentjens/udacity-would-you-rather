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
    const { users, userIds } = this.props;
    return (
      <div className='login'>
        <h1>Would you rather ...</h1>
        <div className="login-form">
          <div className="login-form-header">Sign in to play</div>
          <div className="select-holder">
            <select id="user-select" onChange={this.handleSubmit}>
              <option value="login">Choose your user</option>
              {userIds.map((id) => {
                return (
                  <option key={id} value={id}>
                    {users[id].name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    userIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Login);
