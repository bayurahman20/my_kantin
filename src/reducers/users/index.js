import {
  GET_USERS_PROCESS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from '../../actions';

const initialState = {
  result: [],
  loading: null,
  error: null,
};

export function getUsers(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_PROCESS:
      return {
        ...initialState,
        loading: true,
        result: null,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...initialState,
        loading: false,
        result: action.payload,
      };
    case GET_USERS_FAILED:
      return {
        ...initialState,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
