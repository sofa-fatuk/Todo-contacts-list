import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

import classes from './style.module.css'

interface Iprops extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
}

function Button(props: Iprops) {
  const { value, onClick, type } = props;

  return (
    <div className="container">
      <button
        className={classes.btn}
        type={type}
        value={value}
        onClick={onClick}
      >{value}</button>
    </div>
  )
}

export default Button;