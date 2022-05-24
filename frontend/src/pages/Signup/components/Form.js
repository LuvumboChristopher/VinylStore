import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormInput from './FormInput'

const Form = () => {

  const navigate = useNavigate()

  const [errors, setErrors]= useState(null)
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
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (data.errors) {
        console.log(data.errors)
        setErrors(data.errors)
      }
      if (data.user) {
        navigate('/se-connecter')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className='singup_form' onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <Link to='/se-connecter'>
        <p className='singin_link'>
          Vous avez déjà un compte ? Connectez-vous.
        </p>
      </Link>
      {errors && <span style={{color: 'red'}}>{errors.email}</span>}
      <button className='singup_button'>Envoyer</button>
    </form>
  )
}

export default Form
