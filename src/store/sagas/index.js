import { all } from "redux-saga/effects"
import accountsSaga from "./accounts"
import mailboxSaga from "./mailbox"

export default function* rootSaga() {
  yield all([accountsSaga(), mailboxSaga()])
}
