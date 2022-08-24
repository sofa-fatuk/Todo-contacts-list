import {
  USER_API,
} from './constants'

import { setUser } from '../store/actions';

import { AuthUserRegistrationRequest } from '../types';
import store from '../store';

export const signUpUser = async (user: AuthUserRegistrationRequest) => {
  try {
    const response = await fetch(USER_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const body = await response.json();

    const { status } = response
    if (status === 200 || status === 201) {
      store.dispatch(setUser(user))
      localStorage.setItem('user', JSON.stringify(user))
      return true
    }

    throw Error(body.errorMessage)

  } catch (error) {
    console.error(error);
    return false
  } 
}