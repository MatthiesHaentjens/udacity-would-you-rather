import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class Header extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  };

  render() {
    const { authedUser, users } = this.props;
    return (
      <div className="header">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/leaderboard" className="nav-link">
          Leaderboard
        </Link>
        <Link to="/add" className="nav-link">
          Add Question
        </Link>
        <div className="loggedin-user">
          <div className="nav-circle">
            <img
              className="nav-avatar"
              src={users[authedUser].avatarURL}
              alt="avatar"
            />
          </div>
          <div className='user-name'>{users[authedUser].name}</div>
        </div>
        <button className="logout-link" onClick={this.handleLogout}>
          Log out
        </button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default withRouter(connect(mapStateToProps)(Header));
