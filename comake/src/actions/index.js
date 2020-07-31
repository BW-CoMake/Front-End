import axiosWithAuth from './../utils/axiosWithAuth';

export const GET_ALL_ISSUES = "GET_ALL_ISSUES";
export const GET_USER_ISSUES = "GET_USER_ISSUES";
export const GET_SPEC_ISSUE = "GET_SPEC_ISSUE";
export const DELETE_SPEC_ISSUE = "DELETE_SPEC_ISSUE";
export const ADD_ISSUE = "ADD_ISSUE";
export const EDIT_ISSUE = "EDIT_ISSUE";
export const ADD_USER = "ADD_USER";
export const ADD_VOTE = "ADD_VOTE";
export const SUBTRACT_VOTE = "SUBTRACT_VOTE";

export const register = (user) => dispatch => {
    axiosWithAuth()
        .post("/auth/register", user)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("id", res.data.id)
        })
        .catch(err => console.log("error signing up", err.message))
}

export const login = (user) => dispatch => {
    axiosWithAuth()
        .post("/auth/login", user)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("id", res.data.id)
        })
        .catch(err => console.log(err.message));
}

export const getIssues = () => dispatch => {
    axiosWithAuth()
        .get("/issues")
        .then(res => 
            dispatch({ 
            type: GET_ALL_ISSUES, issues: res.data }))
        .catch(err => console.log(err.message));
}

export const getUserIssues = () => dispatch => {
    axiosWithAuth()
        .get(`/user/${localStorage.getItem("id")}/issues`)
        .then(res => dispatch({ type: GET_USER_ISSUES, issues: res.data }))
}

export const getIssueById = (id) => dispatch => {
    axiosWithAuth()
        .get(`/issues/${id}`)
        .then(res => dispatch({ type: GET_SPEC_ISSUE, issue: res.data }))
}

export const addIssue = (issue) => dispatch => {
    axiosWithAuth()
        .post(`/issues/${localStorage.getItem("id")}`, issue)
        .then(res => dispatch({ type: ADD_ISSUE, issue: res.data }))
        .catch(err => console.log("There was an error adding issue", err.message))
}

export const editIssue = (id, issue) => dispatch => {
    axiosWithAuth()
        .put(`/issues/${id}`, issue)
        .then(res => dispatch({ type: EDIT_ISSUE, issue: res.data }))
}

export const deleteIssue = (id) => dispatch => {
    axiosWithAuth()
        .delete(`/issues/${id}`)
        .then(res => dispatch({ type: DELETE_SPEC_ISSUE, id }))
}

export const upVote = (issue_id, user_id) => dispatch => {
    console.log(issue_id, user_id)
    axiosWithAuth()
        .post(`/upvotes/issue/`, { issue_id: "", user_id: ""})
        .then(res => dispatch({ type: ADD_VOTE, user_id, issue_id }))
}

export const downVote = (issue_id, issue) => dispatch => {
    axiosWithAuth()
        .post(`/upvotes/issue/${issue_id}`, { ...issue, vote: issue.vote - 1 })
        .then(res => dispatch({ type: SUBTRACT_VOTE, issue, issue_id }))
}

