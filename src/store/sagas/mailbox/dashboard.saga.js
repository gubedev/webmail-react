import { 
  put, 
  takeLatest, 
  call 
} from "redux-saga/effects"
import { fetchData } from "api/mailbox"
import { 
  FETCH_DATA, 
  FETCH_DATA_SUCCESS, 
  FETCH_DATA_ERROR 
} from "store/actions/mailbox"

function* fetchDataSaga(action) {
  try {
    const data = yield call(fetchData, action.payload)
    yield put({
      type: FETCH_DATA_SUCCESS,
      payload: data
    })
  } catch (error) {
    yield put({
      type: FETCH_DATA_ERROR,
      error: error.data
    })
  }
}

export function* fetchDataWatcher() {
  yield takeLatest(FETCH_DATA, fetchDataSaga)
}
