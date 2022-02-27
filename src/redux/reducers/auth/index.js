import { combineReducers } from "redux"
import { login } from "./loginReducer"
import { register } from "./registerReducers"
import {reseller} from './AllUserReducer'
import {getAllTransactions}  from './TransactionReducer'

const authReducers = combineReducers({
  login,
  register,
  reseller,
  getAllTransactions
})

export default authReducers
