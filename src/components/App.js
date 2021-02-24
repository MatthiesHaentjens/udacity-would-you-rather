import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Question from "./Question";
import AddQuestion from "./AddQuestion";
import "../App.css";
import LeaderBoard from "./LeaderBoard";

const Footer = () => {
  return <div className="footer">Footer</div>;
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          {this.props.authedUser === null ? (
            <Login />
          ) : (
            <Fragment>
              <Header />
              <div className='main-body'>
                <Route path="/" exact component={Home} />
                <Route path="/question/:id" component={Question} />
                <Route path="/add" component={AddQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
              </div>
              <Footer />
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser,
  };
}

export default connect(mapStateToProps)(App);
