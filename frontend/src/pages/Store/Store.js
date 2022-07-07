import React, { useState } from 'react'
import Navbar from './components/Header/Navbar'
import VinylsList from './components/Vinylist/VinylsList'
import '../../css/store.css'
import { InputSearch, Search } from './components/Header/Search'
import './style'

import {
  HeaderContainer,
  Header,
  ContentContainer,
  Copyright,
  StoreContainer,
} from './style.js'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'

export const StoreHeader = ({ setSerchTerm }) => {
  return (
    <HeaderContainer ContentContainer={ContentContainer}>
      <Header>
        <Navbar />
      </Header>
      <InputSearch setSerchTerm={setSerchTerm} />
    </HeaderContainer>
  )
}


export const StoreFooter = ( ) => {
  const currentYear = new Date().getFullYear()
  return (
    <Copyright>
      <p>© {currentYear} VinylSore All Rights Reserved </p>
    </Copyright>
  )
}


const Store = () => {
  const [searchTerm, setSerchTerm] = useState('')
  const {checkUser} = useAuth()
  
  useEffect(() => {
    checkUser()
  }, [])

  const search = (data) => {
    const keys = ['title', 'author', 'description']
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchTerm))
    )
  }
  
  return (
    <>
      <StoreContainer>
        <StoreHeader setSerchTerm={setSerchTerm} />
        <ContentContainer>
          <VinylsList search={search} />
        </ContentContainer>
        <StoreFooter />
      </StoreContainer>
    </>
  )
}

export default Store
