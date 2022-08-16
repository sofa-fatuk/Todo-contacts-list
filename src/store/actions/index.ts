import { User } from "../../types"

export const SET_CONTACT = 'SET_CONTACT'
export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'


// delete, edit

export function setContacts(contacts: User[]) {
  return {
    type: SET_CONTACT,
    contacts,
  }
}

export function addContacts() {
  return {
    type: ADD_NEW_CONTACT,
    
  }
}

export function deleteContact(id: number) {
  return {
    type: DELETE_CONTACT,
    id,
  }
}
