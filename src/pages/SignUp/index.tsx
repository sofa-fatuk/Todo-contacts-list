import React, { FormEvent, ChangeEvent, CSSProperties, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { signUpUser } from '../../api/user'
import classes from './style.module.css';
import { nanoid } from 'nanoid';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getInputStyle = (): CSSProperties | undefined => {
    if (error) {
      return { borderColor: 'rgba(255, 0, 0, 0.5)' };
    }
    return undefined
  }

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setEmail(value);
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setPassword(value)
  }

  const onChangeRepeatPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = '' } } = event
    setRepeatPassword(value)
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === repeatPassword) {
      setError(false);

      const success = await signUpUser({ email, password, id: nanoid() })

      if (success) {
        navigate('/')
      }
    } else {
      setError(true);
    }
  }

  return (
    <div className={classes.authPage}>
      <h1 className={classes.title}>Sign Up</h1>
      <Form
        onSubmit={onSubmit}
        elements={
          [<Input
            placeholder="Login"
            type="email"
            onChange={onChangeEmail}
            value={email}
            required
          />,
          <Input
            placeholder="Password"
            type="password"
            onChange={onChangePassword}
            value={password}
            required
          />,
          <Input
            placeholder="Repeat Password"
            type="password"
            onChange={onChangeRepeatPassword}
            value={repeatPassword}
            style={getInputStyle()}
            hasError={error}
            errorMessage="Passwords doesn't match"
            required
          />,
          <Button
            type="submit"
            value="Login"
          />,]
        }
      />
    </div>
  )
}

export default SignUp;