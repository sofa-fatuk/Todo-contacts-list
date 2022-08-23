import { User } from "../../types"

export const SET_CONTACT = 'SET_CONTACT'
export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'
export const EDIT_CONTACT = 'EDIT_CONTACT'
export const CONCAT_CONTACTS = 'CONCAT_CONTACTS'


export function setContacts(contacts: User[]) {
  return {
    type: SET_CONTACT,
    contacts,
  }
}

export function concatContacts(users: User[]) {
  return {
    type: CONCAT_CONTACTS,
    users,
  }
}

export function addContact(user: User) {
  return {
    type: ADD_NEW_CONTACT,
    user,
  }
}

export function editContact(user: User) {
  return {
    type: EDIT_CONTACT,
    user,
  }
}

export function deleteContact(id: string) {
  return {
    type: DELETE_CONTACT,
    id,
  }
}
