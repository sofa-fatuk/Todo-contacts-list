import { User } from '../../types';
import { 
  SET_CONTACT,
  // ADD_NEW_CONTACT,
  DELETE_CONTACT,
} from '../actions'

type SetContactsAction = {
  contacts: User[],
  type: string,
}

type changeContactsAction = {
  id: number,
  type: string,
}

const initialState: User[] = []
// const initialState = {
//   contacts: []
// };

function contactsReducer(state = initialState, action: SetContactsAction | changeContactsAction) {
  switch (action.type) {
    case SET_CONTACT:
      return (action as SetContactsAction).contacts
    // case ADD_NEW_CONTACT:
    //   // const addContactId = (action as changeContactsAction).id
    //   return state
    case DELETE_CONTACT:
      const deleteContactId = (action as changeContactsAction).id
      return state.filter(item => item.id !== deleteContactId)
    default:
      return state
  }
}

export default contactsReducer
