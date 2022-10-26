import { configureStore, combineReducers } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contacts'
import userReducer from './reducers/user'

const store = configureStore({
  reducer: combineReducers({
    contacts: contactsReducer,
    user: userReducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store