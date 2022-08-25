import React, { useState, useEffect, ChangeEvent, useRef, useCallback } from 'react'
import { nanoid } from 'nanoid'
import debounce from 'lodash.debounce'
import InfiniteScroll from 'react-infinite-scroller';

import UserContact from '../../components/UserContact'
import AddButton from '../../components/AddButton'
import Input from '../../components/Input'

import { getContacts } from '../../api/contacts'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { Contact } from '../../types'
import { addContact } from '../../store/actions'

import classes from './style.module.css'
import { UserState } from '../../store/reducers/user';
import { useNavigate } from 'react-router-dom';


function Contacts() {
  const navigate = useNavigate();

  const [search, setChangeSearch] = useState('')
  const [currentEditElementId, setCurrentEditElementId] = useState('')
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const didMountRef = useRef(false);

  const debouncedQuery = useRef(debounce(search => {
    getContacts(search, 1, true).then(({ hasMore }) => {
      setHasMore(hasMore)
    })
  }, 300)).current;

  const dispatch = useDispatch()
  const contacts = useSelector<RootState>(state => state.contacts) as Contact[]
  const { authenticated } = useSelector<RootState>(state => state.user) as UserState

  useEffect(() => {
    if (!authenticated) {
      navigate('/sign-up')
    }
  }, [authenticated])

  const fetchContacts = useCallback(async (currentPage: number) => {
    setLoading(true)
    const { hasMore } = await getContacts(search, currentPage)
    setLoading(false)
    setHasMore(hasMore)
  }, [search])

  const fetchData = () => {
    if (!loading) {
      setPage(page + 1)
      fetchContacts(page + 1)
    }
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
    const newContact: Contact = {
      id: nanoid(),
      name: '',
      mail: '',
      avatarUrl: 'https://icon-library.com/images/icon-user/icon-user-19.jpg',
      isNewContactDraft: true
    }
    dispatch(addContact(newContact))
    setCurrentEditElementId(newContact.id)
  }

  const changeContact = (id: string) => {
    setCurrentEditElementId(id)
  }

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
        initialLoad={false}
        loadMore={fetchData}
        hasMore={hasMore}
        loader={loading ? <h4 key="loader">Loading...</h4> : undefined}
      >
        {contacts.map((contact) => {

          return (
          <div key={contact.id} className={classes.contact}>
            <UserContact
              contact={contact}
              readOnly={currentEditElementId !== contact.id}
              onChange={changeContact}
              setCurrentEditElementId={setCurrentEditElementId}
            />
          </div>
        )})}
      </InfiniteScroll>
    </div>
  )
}

export default Contacts