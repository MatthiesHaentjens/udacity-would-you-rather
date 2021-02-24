import { RECEIVE_USERS, SAVE_USER_QUESTION_ANSWER, SAVE_USER_QUESTION } from '../actions/users';

export function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case SAVE_USER_QUESTION_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.id]: action.answer
                    }
                }
            };
        case SAVE_USER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                  ...state[action.authedUser],
                  questions: state[action.authedUser].questions.concat([action.qid])
                }
              };
        default:
            return state
    };
};