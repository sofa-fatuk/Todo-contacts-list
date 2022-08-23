import React, { useState, useEffect, ChangeEvent, useRef, useCallback } from 'react'
import { nanoid } from 'nanoid'
import debounce from 'lodash.debounce'
import InfiniteScroll from 'react-infinite-scroll-component';

import UserContact from '../../components/UserContact'
import AddButton from '../../components/AddButton'
import Input from '../../components/Input'

import { getContacts } from '../../api/contacts'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { User } from '../../types'
import { addContact } from '../../store/actions'

import classes from './style.module.css'


function Contacts() {
  const [search, setChangeSearch] = useState('')
  const [currentEditElementId, setCurrentEditElementId] = useState('')
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const didMountRef = useRef(false);

  const debouncedQuery = useRef(debounce(search => getContacts(search, 1, true), 300)).current;

  const dispatch = useDispatch()
  const contacts = useSelector<RootState>(state => state.contacts) as User[]

  const fetchContacts = useCallback(async (currentPage: number) => {
    setLoading(true)
    console.log('search', search)
    const { hasMore } = await getContacts(search, currentPage)
    setLoading(false)
    setHasMore(hasMore)
  }, [search])

  const fetchData = () => {
    setPage(page + 1)
    fetchContacts(page + 1)
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
      return
    }
    fetchContacts(1)
  }, [])

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setChangeSearch(value)
    setPage(1)
    debouncedQuery(value)
  }

  const addNewContact = () => {
    const newUser: User = {
      id: nanoid(),
      name: '',
      mail: '',
      avatarUrl: 'https://icon-library.com/images/icon-user/icon-user-19.jpg',
      isNewUserDraft: true
    }
    dispatch(addContact(newUser))
    setCurrentEditElementId(newUser.id)
  }

  const changeContact = (id: string) => {
    setCurrentEditElementId(id)
  }

  console.log('hasMore', hasMore);

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

      <InfiniteScroll
        dataLength={contacts.length}
        next={fetchData}
        hasMore={hasMore}
        loader={loading && <h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {contacts.map((user) => (
          <div key={user.id} className={classes.user}>
            <UserContact
              user={user}
              readOnly={currentEditElementId !== user.id}
              onChange={changeContact}
              setCurrentEditElementId={setCurrentEditElementId}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default Contacts