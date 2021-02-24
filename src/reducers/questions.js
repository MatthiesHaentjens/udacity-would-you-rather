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
                // ...state.questions,
                // with a new question object that replaces the existing question
                [action.id]: {
                    // that has all the existing question data
                    ...state[action.id],
                    // with a new answer object that replaces the existing answers
                    [action.answer]: {
                        // with the user id added to votes of the chosen answer by the user
                        votes: state[action.id][action.answer].votes.concat([action.authedUser]),
                        // with the existing text
                        text: state[action.id][action.answer].text,
                        
                    }
                }
            }
        case ADD_QUESTION:
            return {
                // that has all the existing state data
                ...state,
                // with a new questions object
                [action.question.id]: action.question
            }
        default:
            return state
    };
};
