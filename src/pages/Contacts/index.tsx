import React, { useState, useEffect, ChangeEvent } from 'react'
import { nanoid } from 'nanoid'

import UserContact from '../../components/UserContact'
import AddButton from '../../components/AddButton'
import Input from '../../components/Input'

import { getContacts } from '../../api/contacts'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { User } from '../../types'

import classes from './style.module.css'
import { addContact } from '../../store/actions'
import userEvent from '@testing-library/user-event'

function Contacts() {
  const [search, setChangeSearch] = useState('')
  const [currentEditElementId, setCurrentEditElementId] = useState('')


  const dispatch = useDispatch()
  const contacts = useSelector<RootState>(state => state.contacts) as User[]

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setChangeSearch(value)
  }

  const addNewContact = () => {
    const newUser: User = {
      id: nanoid(),
      name: '',
      mail: '',
      avatarUrl: 'https://icon-library.com/images/icon-user/icon-user-19.jpg'
    }
    dispatch(addContact(newUser))
    setCurrentEditElementId(newUser.id)
  }

  const changeContact = (id: string) => {
    setCurrentEditElementId(id)
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <div className={classes.mainPage}>
      <h1 className={classes.title}>List of contacts</h1>
      <div className={classes.blockChange}>
        <div className={classes.search}>
          <Input
            placeholder="search"
            type="text"
            onChange={onChangeSearch}
            value={search}
            required
          />
        </div>
        <div className={classes.addContact}>
          <AddButton
            onClick={addNewContact}
          />
        </div>
      </div>

      {contacts.map((user) => (
        <div className={classes.user}>
          <UserContact
            key={user.id}
            user={user}
            readOnly={currentEditElementId !== user.id}
            onChange={changeContact}
          />
        </div>
      ))}
    </div>
  )
}

export default Contacts