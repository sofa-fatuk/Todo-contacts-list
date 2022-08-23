import React, { useState, ChangeEvent } from 'react'
import EditIcon from '../Svgs/EditIcon'
import DeleteIcon from '../Svgs/DeleteIcon'
import CardInput from '../CardInput'
import SaveIcon from '../Svgs/SaveIcon'

import { User } from '../../types'
import { addNewContact, deleteContact, editContacts } from '../../api/contacts'
import classes from './style.module.css'

interface Iprops {
  user: User,
  readOnly: boolean,
  onChange: (id: string) => void
  setCurrentEditElementId: (id: string) => void
}

function UserContact(props: Iprops) {
  const { user, readOnly, onChange, setCurrentEditElementId } = props
  const [name, setName] = useState(user.name)
  const [mail, setMail] = useState(user.mail)
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl)
  const [avatarUrlValue, setAvatarUrlValue] = useState(user.isNewUserDraft ? '' : user.avatarUrl)

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
    deleteContact(user.id)
  }

  const onEdit = () => {
    onChange(user.id)
  }

  const addChange = async () => {
    console.log('123123')
    console.log("user", user)
    console.log('x', avatarUrlValue.trim())
    const userAvatarUrl = avatarUrlValue.trim() || user.avatarUrl
    const newUser: User = {
      id: user.id,
      name,
      mail,
      avatarUrl: userAvatarUrl,
    }

    if (user.isNewUserDraft) {
      const createSuccess = await addNewContact(newUser)
      if (createSuccess) {
        setCurrentEditElementId('')
        setAvatarUrl(userAvatarUrl)
      }
    } else {
      const editSuccess = await editContacts(newUser)
      if (editSuccess) {
        setCurrentEditElementId('')
      }
    }
  }

  return (
    <div className={classes.user}>
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