import React, { useState, ChangeEvent } from 'react'
import EditIcon from '../Svgs/EditIcon'
import DeleteIcon from '../Svgs/DeleteIcon'

import { User } from '../../types'
import classes from './style.module.css'
import { deleteContact } from '../../api/contacts'
import CardInput from '../CardInput'

interface Iprops {
  user: User,
  readOnly: boolean,
  onChange: (id: string) => void
}

function UserContact (props: Iprops) {
  const { user, readOnly, onChange } = props
  const [name, setName] = useState(user.name)
  const [mail, setMail] = useState(user.mail)
  const [avatarUrl, setAvatarUrl] = useState('')


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
    setAvatarUrl(value)
  }

  const onDelete = () => {
    deleteContact(user.id)
  }

  const onEdit = () => {
    onChange(user.id) 
  }

  return (
      <div className={classes.user}>
        <img className={classes.avatar__img} src={user.avatarUrl}/>
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
                        value={avatarUrl}
                        onChange={onChangeAvatar}
                        readOnly={readOnly}
                        required
                      />
          )}
          <div className={classes.icons}>
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