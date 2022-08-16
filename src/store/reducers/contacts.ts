import { User } from '../../types';
import { 
  SET_CONTACT,
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
} from '../actions'

type SetContactsAction = {
  contacts: User[],
  type: string,
}

type DeleteContactsAction = {
  id: string,
  type: string,
}

type AddContactAction = {
  user: User,
  type: string,
}

const initialState: User[] = []

function contactsReducer(state = initialState, action: SetContactsAction | DeleteContactsAction | AddContactAction) {
  switch (action.type) {
    case SET_CONTACT:
      return (action as SetContactsAction).contacts
    case ADD_NEW_CONTACT:
      return state.concat((action as AddContactAction).user)
    case DELETE_CONTACT:
      const deleteContactId = (action as DeleteContactsAction).id
      return state.filter(item => item.id !== deleteContactId)
    default:
      return state
  }
}

export default contactsReducer
