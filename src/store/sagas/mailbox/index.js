import { all } from "redux-saga/effects"
import { fetchDataWatcher } from "./dashboard.saga"

export default function* mailboxSaga() {
  yield all([fetchDataWatcher()])
}
