export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USER_QUESTION_ANSWER = 'SAVE_USER_QUESTION_ANSWER';
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
};

export function saveUserQuestionAnswer(question) {
    return {
        type: SAVE_USER_QUESTION_ANSWER,
        authedUser: question.authedUser,
        id: question.qid,
        answer: question.answer,
    };
};

export function saveUserQuestion(question) {
    return {
        type: SAVE_USER_QUESTION,
        question,
    };
};