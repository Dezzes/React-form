import { combineReducers } from "redux"
import { formErrorsReducer } from "./formErrorsReducer"
import { formValuesReducer } from "./formValuesReducer"

export const rootReducer = combineReducers({
    formValues: formValuesReducer,
    formErrors: formErrorsReducer
})

