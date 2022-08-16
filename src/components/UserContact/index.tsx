import React from 'react'
import CreateIcon from '../CreateIcon'
import DeleteIcon from '../DeleteIcon'

import { User } from '../../types'
import classes from './style.module.css'
import { deleteContact } from '../../api/contacts'

interface Iprops {
  user: User,
}

function UserContact (props: Iprops) {
  const { user } = props

  const onDelete = () => {
    deleteContact(user.id)
  }

  return (
      <div className={classes.user}>
        <img className={classes.avatar__img} src={user.avatarUrl}/>
        <div className={classes.info}>
          <span className={classes.name}>{user.name}</span>
          <p className={classes.email}>
            user@email.com
          </p>
          <div className={classes.icons}>
            <CreateIcon 
              width="30px" 
              height="30px"
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