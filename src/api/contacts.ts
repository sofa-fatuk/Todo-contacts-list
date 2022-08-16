import {
  CONTACTS_API,
} from './constants';

import { User } from '../types';
import store from '../store';
import { 
  setContacts,
  // addContacts, 
  deleteContact as deleteContactAction
} from '../store/actions';
import { Dispatch } from 'redux';

// eslint-disable-next-line import/prefer-default-export
export const getContacts = async (): Promise<User[]> => {
  try {
    const response = await fetch(CONTACTS_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const contacts = await response.json();
    console.log('contact12312s', contacts)

    const thunkFunction = (dispatch: Dispatch) => {
      dispatch(setContacts(contacts))
    }
    store.dispatch(thunkFunction)

    return contacts
  } catch (error) {
    console.error(error);
    return []
  } 
}

// export const addNewContact = async (id: number) => {
//   try {
//     const response = await fetch(`${CONTACTS_API}/${id}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     // const contacts = await response.json();

//     console.log(response)
//     //  проверить что в ответе нет ошибки

//     const thunkFunction = (dispatch: Dispatch) => {
//       dispatch(addContacts(id))
//     }
//     store.dispatch(thunkFunction)

//   } catch (error) {
//     console.error(error);
//     return []
//   } 
// }

export const deleteContact = async (id: number) => {
  try {
    const response = await fetch(`${CONTACTS_API}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)

    const thunkFunction = (dispatch: Dispatch) => {
      dispatch(deleteContactAction(id))
    }
    store.dispatch(thunkFunction)

  } catch (error) {
    console.error(error);
    return []
  } 
}
