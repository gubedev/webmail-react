import { 
  put, 
  takeLatest, 
  call 
} from "redux-saga/effects"
import { login } from "api/accounts/accounts.api"
import { 
  SIGNIN, 
  SIGNIN_SUCCESS, 
  SIGNIN_ERROR 
} from "store/actions/accounts"

function* signInSaga(action) {
  try {
    const data = yield call(login, action.payload)
    yield put({
      type: SIGNIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    yield put({
      type: SIGNIN_ERROR,
      error: error.data
    })
  }
}

export function* signInWatcher() {
  yield takeLatest(SIGNIN, signInSaga)
}
