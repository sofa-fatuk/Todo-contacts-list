import React, { useState, useEffect, ChangeEvent } from 'react'
import classes from './style.module.css'
import UserContact from '../../components/UserContact'
import { getContacts } from '../../api/contacts'
import Input from '../../components/Input'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { User } from '../../types'

function Contacts() {
  const [search, setChangeSearch] = useState('')

  const contacts = useSelector<RootState>(state => state.contacts) as User[]
  
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setChangeSearch(value)
  }

  const addNewContact = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault(); 
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
            <Input
              placeholder="add contact"
              type="text"
              onChange={addNewContact}
              value={search}
              required
            />
          </div>
        </div>

        {contacts.map((user) => (
          <div className={classes.user}>
            <UserContact
              key={user.id}
              user={user}
            />
          </div>
      ))}
    </div>
  )
}

export default Contacts