import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    const { authedUser, users } = this.props;
    return (
      <div className="header">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/" className="nav-link">
          Leaderboard
        </Link>
        <Link to="/add" className="nav-link">
          Add Question
        </Link>
        <div className="nav-circle">
          <img
            className="nav-avatar"
            src={users[authedUser].avatarURL}
            alt="avatar"
          />
        </div>
        <Link to="/" className="logout-link">
          Logout
        </Link>
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
