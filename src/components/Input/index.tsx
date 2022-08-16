import React, { ChangeEvent } from 'react'
import classes from './style.module.css'

interface IProps extends React.HTMLProps<HTMLInputElement> {
  hasError?: boolean,
  errorMessage?: string,
}

function Input(props: IProps) {
  const {
    className, hasError, errorMessage, ...rest
  } = props;

  const getInputClassName = () => {
    if (className) {
      return `${className} ${classes.input}`
    }
    return classes.input
  }

  return (
    <label>
      <input
        className={getInputClassName()}
        {...rest}
      />
      {hasError && <span>{errorMessage}</span>}
    </label>
  )
}

export default Input;
