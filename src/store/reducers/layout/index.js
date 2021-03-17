import { combineReducers } from "redux"
import sidebar from "./sidebar.reducer"

const layout = combineReducers({
  sidebar
})

export default layout
