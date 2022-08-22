import {
  CONTACTS_API,
} from './constants';

import { User } from '../types';
import store from '../store';
import { 
  setContacts,
  editContact,
  deleteContact as deleteContactAction
} from '../store/actions';
import { Dispatch } from 'redux';


export const getContacts = async (search: string): Promise<User[]> => {
  try {
    const response = await fetch(`${CONTACTS_API}?name_like=${search}`, {
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
    const body = await response.json();

    const { status } = response
    if (status === 200 || status === 201) {
      return true
    }

    throw Error(body.errorMessage)

  } catch (error) {
    console.error(error);
    return false
  } 
}

export const editContacts = async (user: User) => {
  try {
    const response = await fetch(`${CONTACTS_API}/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    console.log('respons', response)

    const body = await response.json();
    console.log(body)

    const thunkFunction = (dispatch: Dispatch) => {
      dispatch(editContact(user))
    }
    store.dispatch(thunkFunction)

    const { status } = response
    if (status === 200 || status === 201) {
      return true
    }

    throw Error(body.errorMessage)
  } catch (error) {
    console.error(error);
    return []
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
