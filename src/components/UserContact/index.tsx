import React, { useState, ChangeEvent } from 'react'
import EditIcon from '../Svgs/EditIcon'
import DeleteIcon from '../Svgs/DeleteIcon'
import CardInput from '../CardInput'
import SaveIcon from '../Svgs/SaveIcon'

import { Contact } from '../../types'
import { addNewContact, deleteContact, editContacts } from '../../api/contacts'
import classes from './style.module.css'

interface Iprops {
  contact: Contact,
  readOnly: boolean,
  onChange: (id: string) => void
  setCurrentEditElementId: (id: string) => void
}

function UserContact(props: Iprops) {
  const { contact, readOnly, onChange, setCurrentEditElementId } = props
  const [name, setName] = useState(contact.name)
  const [mail, setMail] = useState(contact.mail)
  const [avatarUrl, setAvatarUrl] = useState(contact.avatarUrl)
  const [avatarUrlValue, setAvatarUrlValue] = useState(contact.isNewContactDraft ? '' : contact.avatarUrl)

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setName(value)
  }

  const onChangeMail = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setMail(value)
  }

  const onChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setAvatarUrlValue(value)
  }

  const onDelete = () => {
    deleteContact(contact.id)
  }

  const onEdit = () => {
    onChange(contact.id)
  }

  const addChange = async () => {
    const userAvatarUrl = avatarUrlValue.trim() || contact.avatarUrl
    const newContact: Contact = {
      id: contact.id,
      name,
      mail,
      avatarUrl: userAvatarUrl,
    }

    if (contact.isNewContactDraft) {
      const createSuccess = await addNewContact(newContact)
      if (createSuccess) {
        setCurrentEditElementId('')
        setAvatarUrl(userAvatarUrl)
      }
    } else {
      const editSuccess = await editContacts(newContact)
      if (editSuccess) {
        setCurrentEditElementId('')
        setAvatarUrl(userAvatarUrl)
      }
    }
  }

  return (
    <div className={classes.contact}>
      <img className={classes.avatar__img} src={avatarUrl} />
      <div className={classes.info}>
        <CardInput
          placeholder="name"
          type="text"
          onChange={onChangeName}
          value={name}
          readOnly={readOnly}
          required
        />
        <CardInput
          placeholder="email"
          type="text"
          onChange={onChangeMail}
          value={mail}
          readOnly={readOnly}
          required
        />
        {!readOnly && (
          <CardInput
            placeholder="image"
            type="text"
            onChange={onChangeAvatar}
            value={avatarUrlValue}
            readOnly={readOnly}
            required
          />
        )}
        <div className={classes.icons}>
          {!readOnly && (
            <SaveIcon
              width="25px"
              height="25px"
              onClick={addChange}
            />
          )}
          <EditIcon
            width="30px"
            height="30px"
            onClick={onEdit}
          />
          <DeleteIcon
            width="30px"
            height="30px"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default UserContact