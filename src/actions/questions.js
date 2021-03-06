import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { saveUserQuestionAnswer, saveUserQuestion } from './users'
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    id: qid,
    answer,
  };
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    dispatch(answerQuestion(info));
    dispatch(saveUserQuestionAnswer(info))
    return _saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in handleAnswerQuestion", e);
      alert("There was an error answering the question. Try again");
    });
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    console.log(question)
    return _saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(saveUserQuestion(question));
      })
      .catch((e) => {
        console.warn("Error in handleAddQuestion", e);
        alert("There was an error adding the question. Try again");
    });
  };
}
