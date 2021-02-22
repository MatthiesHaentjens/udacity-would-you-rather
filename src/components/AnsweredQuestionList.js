import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

class AnsweredQuestionList extends Component {
    render() {
        const { questions, ids } = this.props
        return (
            <div className='answered'>
                {ids.map(id => {
                    return (
                    <Link to={`/question/${id}`} key={id}>{questions[id].optionOne.text} Or ...</Link>
                )})}
            </div>
        );
    };
};

function mapStateToProps({ questions }) {
    return {
        questions: questions
    }
}

export default withRouter(connect(mapStateToProps)(AnsweredQuestionList));