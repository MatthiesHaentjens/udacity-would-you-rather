import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions';

export function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                // that has all the existing state data
                ...state,
                // that has all the questions data retrieved with the action
                ...action.questions
            }
        case ANSWER_QUESTION:
            return {
                // that has all the existing state data
                ...state,
                // that has all the exiting question data
                ...state.questions,
                // with a new question object that replaces the existing question
                [action.id]: {
                    // that has all the existing question data
                    ...state.questions[action.id],
                    // with the user id added to votes of the chosen answer by the user
                    [action.answer]: state.questions[action.id][action.answer].votes.concat([action.authedUser])
                }
            }
        case ADD_QUESTION:
            return {
                // that has all the existing state data
                ...state,
                // with a new questions object
                questions: {
                    // that has the existing questions data
                    ...state.questions,
                    // with a new question added
                    [action.question.id]: action.question
                }
            }
        default:
            return state
    };
};
