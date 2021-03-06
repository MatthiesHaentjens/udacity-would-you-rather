import { getInitialData } from '../utils/_DATA'
import { receiveUsers } from './users';
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser';

// To set based on user selection
const AUTHED_ID = null

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}