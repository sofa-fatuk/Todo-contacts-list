import {
  CONTACTS_API,
} from './constants';

import { Contact } from '../types';
import store from '../store';
import { 
  editContact,
  concatContacts,
  deleteContact as deleteContactAction,
  setContacts
} from '../store/actions';

type GetContactsResult = {
  hasMore: boolean,
}

export const getContacts = async (search: string, page: number, reset = false): Promise<GetContactsResult> => {
  try {
    const url = `${CONTACTS_API}?name_like=${search}&_page=${page}&_limit=20`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const contacts = await response.json();

    if (reset) {
      store.dispatch(setContacts(contacts))
    } else {
      store.dispatch(concatContacts(contacts))
    }

    return {
      hasMore: contacts.length > 0,
    }
  } catch (error) {
    console.error(error);
    return {
      hasMore: false,
    }
  } 
}

export const addNewContact = async (contact: Contact) => {
  try {
    const response = await fetch(CONTACTS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
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

export const editContacts = async (contact: Contact) => {
  try {
    const response = await fetch(`${CONTACTS_API}/${contact.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    const body = await response.json();

    store.dispatch(editContact(contact))

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
    // console.log('delete', response);
    

    store.dispatch(deleteContactAction(id))

  } catch (error) {
    console.error(error);
    return []
  } 
}
