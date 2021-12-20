export const GET_USERS_PROCESS = 'GET_USERS_PROCESS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

export function getUsers() {
  return {
    type: GET_USERS_PROCESS,
  };
}
