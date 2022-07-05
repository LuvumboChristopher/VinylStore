import Axios from 'axios'
import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)
  const navigate = useNavigate()

  const login = (user) => {
    setAuth(user)
  }

  const logout = () => {
    setAuth(null)
  }

  const checkUser = async () => {
    const { data } = await Axios.get(
      'http://localhost:5000/api/v1/auth/protected',
      {
        withCredentials: true,
      }
    )
    if (data.userId) {
      return setAuth(data)
    }
    navigate('/store')
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout, checkUser }}>
      {children}
    </AuthContext.Provider>
  )
}
