import React from 'react'
import classes from './style.module.css'

interface IProps extends React.HTMLProps<HTMLInputElement> {
  hasError?: boolean,
  errorMessage?: string,
}

function CardInput(props: IProps) {
  const { readOnly, ...rest} = props;

  return (
    <label>
      <input className={readOnly ? classes.card__input__readonly : classes.card__text} readOnly={readOnly} {...rest}/>
    </label>
  )
}

export default CardInput;
