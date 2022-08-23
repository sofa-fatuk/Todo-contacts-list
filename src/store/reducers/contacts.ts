import { User } from '../../types';
import {
  SET_CONTACT,
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  CONCAT_CONTACTS,
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

type EditContactsAction = {
  user: User,
  type: string,
}

type ConcatContactsAction = {
  users: User[],
  type: string,
}

const initialState: User[] = []

function contactsReducer(state = initialState, action: SetContactsAction | DeleteContactsAction | AddContactAction | EditContactsAction | ConcatContactsAction) {
  switch (action.type) {
    case SET_CONTACT:
      return (action as SetContactsAction).contacts
    case ADD_NEW_CONTACT:
      return [(action as AddContactAction).user, ...state]
    case EDIT_CONTACT:
      const editContactUser = (action as EditContactsAction).user
      return state.map(item => { 
        if (item.id !== editContactUser.id) {
          return item
        }
        return editContactUser
      })
    case DELETE_CONTACT:
      const deleteContactId = (action as DeleteContactsAction).id
      return state.filter(item => item.id !== deleteContactId)
    case CONCAT_CONTACTS:
      return state.concat((action as ConcatContactsAction).users)
    default:
      return state
  }
}

export default contactsReducer
