const SET_VALUES = "SET_VALUES"

const defaultState = {
    city: 'Красноярск',
    email: '',
    password1: '',
    password2: '',
    mailing: false
}
export const formValuesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_VALUES:
            return {...state, ...action.payload}       
        default:
            return state
    }
}

export const setValuesAction = (payload) => ({type: SET_VALUES, payload})