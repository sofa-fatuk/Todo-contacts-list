import { Contact } from '../../types';
import {
  SET_CONTACT,
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  CONCAT_CONTACTS,
  
} from '../actions'

type SetContactsAction = {
  contacts: Contact[],
  type: string,
}

type DeleteContactsAction = {
  id: string,
  type: string,
}

type AddContactAction = {
  contact: Contact,
  type: string,
}

type EditContactsAction = {
  contact: Contact,
  type: string,
}

type ConcatContactsAction = {
  contacts: Contact[],
  type: string,
}

const initialState: Contact[] = []

function contactsReducer(state = initialState, action: SetContactsAction | DeleteContactsAction | AddContactAction | EditContactsAction | ConcatContactsAction) {
  switch (action.type) {
    case SET_CONTACT:
      return (action as SetContactsAction).contacts
    case ADD_NEW_CONTACT:
      return [(action as AddContactAction).contact, ...state]
    case EDIT_CONTACT:
      const editContactUser = (action as EditContactsAction).contact
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
      return state.concat((action as ConcatContactsAction).contacts)
    default:
      return state
  }
}

export default contactsReducer
