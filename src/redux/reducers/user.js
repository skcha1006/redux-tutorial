export const userReducer = (state = '', action) => {
  if (action.type === 'updateState') {
    return action.payload.updateState;
  }

  if (action.type === 'updateUser') {
    return action.payload.updateUser;
  }

  return state;
}