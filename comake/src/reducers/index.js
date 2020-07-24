import {
    GET_ALL_ISSUES,
    GET_USER_ISSUES,
    GET_SPEC_ISSUE,
    DELETE_SPEC_ISSUE,
    ADD_ISSUE,
    EDIT_ISSUE,
    ADD_VOTE,
    SUBTRACT_VOTE  
} from '../actions';

const initialState = {
    issues: [],
    singleIssue: {}
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_ISSUES:
            return {...state, issues: action.issues}
        case GET_USER_ISSUES:
            return {...state, issues: action.issues}
        case GET_SPEC_ISSUE:
            return {...state, singleIssue: action.issue}
        case ADD_ISSUE:
            return {...state, issues: [...state.issues, action.issue]}
        case EDIT_ISSUE:
            return {...state, singleIssue: action.issue}
        case DELETE_SPEC_ISSUE:
            return {...state, issues: state.issues.filter(issue => issue.id === action.id)}
        case ADD_VOTE:
            return {...state, singleIssue: {...state.singleIssue, vote: action.issue.vote + 1}, issues: state.issues.map(value => (value.id === action.id) ? {...action.issue, vote: action.issue.vote + 1} : value)}
        case SUBTRACT_VOTE: 
             return {...state, singleIssue: {...state.singleIssue, vote: action.issue.vote - 1}, issues: state.issues.map(value => (value.id === action.id) ? {...action.issue, vote: action.issue.vote - 1} : value)}
        default: return {...state}
    }
};