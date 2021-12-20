import {
  GET_USERS_PROCESS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from '../../actions';
import {put, takeLatest} from 'redux-saga/effects';
import {filterFetch} from '../../utils/utilization';

export function* getUsers(action) {
  try {
    const result = yield filterFetch('https://gorest.co.in/public/v1/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put({
      type: GET_USERS_SUCCESS,
      payload: result,
    });
  } catch (error) {
    yield put({
      type: GET_USERS_FAILED,
      error: error,
    });
  }
}

export function* watchGetUsers() {
  yield takeLatest(GET_USERS_PROCESS, getUsers);
}
