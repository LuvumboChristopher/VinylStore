import React, { useState} from 'react'
import FormInput from './FormInput'
import axios from 'axios'
import { LoginScreenLink, SingupButton, SingupForm } from '../style'
import useAuth from '../../../hooks/useAuth'


const Form = () => {
  const { login } = useAuth()
  const [errors, setErrors] = useState(null)
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      errormessage: 'Veuillez inclure une adresse électronique valide.',
      placeholder: 'Email',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      errormessage:
        'Le mot de passe doit comporter entre 8 et 19 lettres et doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial.',
      placeholder: 'Mot de passe',
      required: true,
      pattern: '^.*(?=.{8,19})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$',
    },
    {
      id: 3,
      name: 'confirmPassword',
      type: 'password',
      errormessage: 'Les mots de passe ne correspondent pas.',
      placeholder: 'Confirmer mot de passe',
      required: true,
      pattern: values.password,
    },
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = 'http://localhost:5000/api/v1/auth/signup'
      await axios.post(url, values)
      login(values.email, values.password )
    } catch (err) {
      setErrors(err.response.data.errors)
      setValues({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    }
  }

  return (
    <SingupForm onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <LoginScreenLink to='/connexion'>
        Vous avez déjà un compte ? Connectez-vous.
      </LoginScreenLink>
      {errors && <span style={{ color: 'red' }}>{errors.email}</span>}
      <SingupButton type='submit'>Envoyer</SingupButton>
    </SingupForm>
  )
}

export default Form
