import { combineReducers } from "redux"
import accounts from "./accounts"
import layout from "./layout"
import mailbox from "./mailbox"

const createReducer = asyncReducers =>
  combineReducers({
    accounts,
    layout,
    mailbox,
    ...asyncReducers,
  })

export default createReducer
