import { combineReducers } from "redux"
import { login } from "./loginReducer"
import { signup } from "./signupReducer"

const authReducers = combineReducers({
  login,
  signup
})

export default authReducers
