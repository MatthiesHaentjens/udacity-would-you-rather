import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnsweredQuestionList from './AnsweredQuestionList'

class Home extends Component {
    render() {

        return (
            <div className='leader-board'>
                <AnsweredQuestionList ids={this.props.answered} />
            </div>
        );
    };
};

function mapStateToProps({ authedUser, questions, users }) {
    const answered = Object.keys(users[authedUser].answers)
    const unanswered = Object.keys(questions).filter(id => !answered.includes(id))
    return {
        answered: answered,
        unanswered: unanswered
    }
}

export default connect(mapStateToProps)(Home);