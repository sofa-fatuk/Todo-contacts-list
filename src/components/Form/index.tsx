import React, { ReactNode, FormEvent } from "react";
import classes from './style.module.css';

interface IProps {
  elements: ReactNode[],
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function Form(props: IProps) {
  const { elements, onSubmit } = props;

  if (Array.isArray(elements) && elements.length > 0) {
    return (
      <form className={classes.form} onSubmit={onSubmit}>
        {elements.map((item, index) => (
          <div className={classes.row} key={index}>
            {item}
          </div>
        ))}
      </form>
    )
  }

  return null
}

export default Form