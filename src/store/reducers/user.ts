import { AuthUser } from "../../types";
import { SET_USER } from "../actions";

export type UserState = {
  user: AuthUser,
  authenticated: boolean,
}


const userFromLocalStorage = localStorage.getItem('user')
const user = userFromLocalStorage && JSON.parse(userFromLocalStorage)

export const initialState: UserState = {
  user,
  authenticated: Boolean(user),
}

type setActionUser = {
  user: AuthUser,
  type: string,
}

function userReducer(state = initialState, action: setActionUser) {
  switch (action.type) {
    case SET_USER:
      return {
        user: (action as setActionUser).user, 
        authenticated: true,
      }
    default:
      return state
  }
}

export default userReducer
