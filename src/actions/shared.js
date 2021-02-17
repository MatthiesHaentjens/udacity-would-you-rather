import { getInitialData } from '../utils/_DATA'
import { receiveUsers } from './users';
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading'

// To set based on user selection
const AUTHED_ID = 'sarahedo'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}