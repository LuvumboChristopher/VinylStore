import axios from 'axios'
import Axios from 'axios'
import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: '' , isAdmin: ''})
  const navigate = useNavigate()

  const logout = () => {
    setAuth({})
    localStorage.clear()
  }
  const login = async(email, password) => {
      const url = 'http://localhost:5000/api/v1/auth/login'
      await axios.post(
        url,
        {
          email,
          password,
        },
        {
          withCredentials: true
        }
      )
      navigate('/store')
  }

  const checkUser = async () => {
    const { data } = await Axios.get(
      'http://localhost:5000/api/v1/auth/protected',
      {
        withCredentials: true,
      }
    )
    if(!data){
      return setAuth({})
    }
    setAuth({
      user:  data.userId,
      isAdmin: data.userIsAdmin,
    })
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, login, checkUser }}>
      {children}
    </AuthContext.Provider>
  )
}
