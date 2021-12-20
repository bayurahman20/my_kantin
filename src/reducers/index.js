import {combineReducers} from 'redux';
import {getUsers} from './users';

const allReducer = combineReducers({
  getUsers,
});

export default allReducer;
