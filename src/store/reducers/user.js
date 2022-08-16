export const initalReducer = {
  userLoaded: false,
}

function userReducer(state = initalReducer, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {};
    default:
      return state
  }
}

export default userReducer
