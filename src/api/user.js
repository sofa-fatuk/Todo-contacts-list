import {
  USER_API,
  LOGIN_URL,
} from './constants'

export const signUpUser = async (data) => {
  try {
    const response = await fetch(USER_API, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const user = await response.json();
    return user
  } catch (error) {
    console.error(error);
    return null
  }
}

// import { User } from '../types';

// export const signUpUser = async (user: User) => {
//   try {
//     const response = await fetch(USER_API, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     });
//     const body = await response.json();

//     const { status } = response
//     if (status === 200 || status === 201) {
//       return true
//     }

//     throw Error(body.errorMessage)

//   } catch (error) {
//     console.error(error);
//     return false
//   } 
// }

// export const signInUser = async (data) => {
//   try {
//     const response = await fetch(LOGIN_URL, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const body = await response.json();

//     // response.status
//     const { status } = response

//     if (status === 200) {
//       return body 
//     }

//     throw Error(body.errorMessage)
//   } catch (error) {
//     console.error('Ошибка:', error);
//     return null
//   }
// }

// USER_API
// /users

// export const getUser = async (userNickName) => {
//   try {
//     const getUserUrl = `${USER_API}/${userNickName}`
//     console.log(getUserUrl);
//     const response = await fetch(getUserUrl, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const user = await response.json();
//     return user
//   } catch (error) {
//     console.error(error);
//     return null
//   }
// }
