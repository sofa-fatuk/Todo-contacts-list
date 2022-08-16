import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import CreateIcon from "../Svgs/CreateIcon"

import classes from './style.module.css'

interface Iprops extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
}

function AddButton(props: Iprops) {
  const { onClick, type } = props;

  return (
    <button
      className={classes.btn}
      type={type}
      onClick={onClick}
    >
      <CreateIcon/>
    </button>
  )
}

export default AddButton;