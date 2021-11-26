const SET_ERRORS = "SET_ERRORS"


const defaultState = {
    email: '',
    password1: '',
    password2: ''

}
export const formErrorsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ERRORS:
            return {...state, ...action.payload}       
        default:
            return state
    }
}

export const setErrorsAction = (payload) => ({type: SET_ERRORS, payload})