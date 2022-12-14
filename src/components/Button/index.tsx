import React, { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react'

import classes from './style.module.css'

interface Iprops extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
}

function Button(props: Iprops) {
  const { value, onClick, type } = props;

  return (
    <button
      className={classes.btn}
      type={type}
      onClick={onClick}
    >{value}</button>
  )
}

export default Button;