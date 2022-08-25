import { AuthUser, Contact } from "../../types"

export const SET_CONTACT = 'SET_CONTACT'
export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'
export const EDIT_CONTACT = 'EDIT_CONTACT'
export const CONCAT_CONTACTS = 'CONCAT_CONTACTS'
export const SET_USER = 'SET_USER'

export function setUser(user: AuthUser) {
  return {
    type: SET_USER,
    user,
  }
}


export function setContacts(contacts: Contact[]) {
  return {
    type: SET_CONTACT,
    contacts,
  }
}

export function concatContacts(contacts: Contact[]) {
  return {
    type: CONCAT_CONTACTS,
    contacts,
  }
}

export function addContact(contact: Contact) {
  return {
    type: ADD_NEW_CONTACT,
    contact,
  }
}

export function editContact(contact: Contact) {
  return {
    type: EDIT_CONTACT,
    contact,
  }
}

export function deleteContact(id: string) {
  return {
    type: DELETE_CONTACT,
    id,
  }
}
