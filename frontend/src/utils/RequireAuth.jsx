import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth = ({children}) => {
  const {auth} = useAuth()
  
  if(!auth.user){
    return <Navigate to={'/connexion'} />
  }

  return children
}

export default RequireAuth