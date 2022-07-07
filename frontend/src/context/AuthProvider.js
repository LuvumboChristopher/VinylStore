import Axios from 'axios'
import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ userId: '' , isAdmin: ''})

  const logout = () => {
    setAuth({})
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
      user: data.userId,
      isAdmin: data.userIsAdmin,
    })
  }

  const checkUserRealTime = async () => {
    const { data } = await Axios.get(
      'http://localhost:5000/api/v1/auth/protected',
      {
        withCredentials: true,
      }
    )
    if (!data) {
      return setAuth({})
    }
    setAuth({
      user: data.userId,
      isAdmin: data.userIsAdmin,
    })
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, checkUser }}>
      {children}
    </AuthContext.Provider>
  )
}
