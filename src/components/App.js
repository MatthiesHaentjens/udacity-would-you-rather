import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Question from "./Question";
import "../App.css";

const Footer = () => {
  return <div className="footer">Footer</div>;
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(this.props.authedUser);
    return (
      <Router>
        <div className="app-container">
          {this.props.authedUser === null ? (
            <Login />
          ) : (
            <Fragment>
              <Header />
              <div>
                <Route path="/" exact component={Home} />
                <Route path="/question/:id" component={Question} />
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
