import { User } from "../../types"

export const SET_CONTACT = 'SET_CONTACT'
export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'


export function setContacts(contacts: User[]) {
  return {
    type: SET_CONTACT,
    contacts,
  }
}

export function addContact(user: User) {
  return {
    type: ADD_NEW_CONTACT,
    user,
  }
}

export function deleteContact(id: string) {
  return {
    type: DELETE_CONTACT,
    id,
  }
}
