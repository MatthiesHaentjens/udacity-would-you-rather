import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

const Header = () => {
    return (
      <div className="header">
        <Link to='/' className="nav-link">
          Home
        </Link>
        <Link to='/' className="nav-link">
          Leaderboard
        </Link>
        <Link to='/' className="nav-link">
          Add Question
        </Link>
        <div className="nav-avatar">Picture</div>
        <Link to='/' className="logout-link">
          Logout
        </Link>
      </div>
    );
  };


export default withRouter(connect()(Header));