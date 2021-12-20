import {all, fork} from 'redux-saga/effects';
import {watchGetUsers} from './users';

export default function* sagas() {
  yield all([fork(watchGetUsers)]);
}
