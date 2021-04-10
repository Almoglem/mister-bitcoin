const INITIAL_STATE = {
  user: null
}
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'TRANSFER_COINS':
      return {
        ...state,
        user: { ...state.user, coins: state.user.coins - action.transferAmount }
      }

    default:
      return state
  }
}