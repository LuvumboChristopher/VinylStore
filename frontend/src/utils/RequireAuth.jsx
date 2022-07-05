import React from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth = ({children}) => {
  const {auth} = useAuth()
  const location = useLocation()

  if(!auth){
    return <Navigate to={'/connexion'} />
  }

  return children
}

export default RequireAuth