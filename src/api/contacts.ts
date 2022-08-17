import {
  CONTACTS_API,
} from './constants';

import { User } from '../types';
import store from '../store';
import { 
  setContacts,
  deleteContact as deleteContactAction
} from '../store/actions';
import { Dispatch } from 'redux';


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

export const addNewContact = async (user: User) => {
  try {
    const response = await fetch(CONTACTS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    console.log(response);
    const body = await response.json();

    console.log(body)
    const { status } = response
    console.log(status)
    if (status === 200 || status === 201) {
      return true
    }

    throw Error(body.errorMessage)

  } catch (error) {
    console.error(error);
    return false
  } 
}

export const deleteContact = async (id: string) => {
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
