import React from 'react'
import { useNavigate } from 'react-router-dom'

const Title = () => {

  const navigate = useNavigate()
  return (
    <header onClick={() => navigate('/store')} style={{ cursor: 'pointer' }}>
      <h1 className='auth_title'>VinylStore</h1>
      <p className='auth_subtitle'>Bienvenue a la maison du vinyle</p>
    </header>
  )
}

export default Title
