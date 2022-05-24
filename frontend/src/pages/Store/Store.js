import React, { useContext, useState } from 'react'
import Navbar from './components/Header/Navbar'
import VinylsList from './components/Vinylist/VinylsList'
import '../../css/store.css'
import styled from 'styled-components'
import { InputSearch, Search } from './components/Header/Search'


const HeaderContainer = styled.div`
  width: 100%;
  height: 10.5rem;
  background-color: white;
  position: fixed;
  top: 0;
  display: grid;
  place-items: center;
`
const Header = styled.div`
  width: 100%;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ContentContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 16rem;
`
const Copyright = styled.p`
  width: 100%;
  margin: 3rem auto;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
`

export const StoreHeader = ({ setSerchTerm }) => {
  return (
    <HeaderContainer ContentContainer={ContentContainer}>
      <Header>
        <InputSearch setSerchTerm={setSerchTerm} />
        <Navbar />
      </Header>
    </HeaderContainer>
  )
}

export const ProductHeader = () => {
  return (
    <HeaderContainer ContentContainer={ContentContainer}>
      <Header>
        <Search />
        <Navbar />
      </Header>
    </HeaderContainer>
  )
}

const Store = () => {
  const [searchTerm, setSerchTerm] = useState('')
  const currentYear = new Date().getFullYear()

  const search = (data) => {
    const keys = ['title', 'author', 'description']
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchTerm))
    )
  }

  return (
    <section id='store'>
      <StoreHeader setSerchTerm={setSerchTerm} />
      <ContentContainer>
        <VinylsList search={search} />
        <Copyright>© {currentYear} VinylSore All Rights Reserved </Copyright>
      </ContentContainer>
    </section>
  )
}

export default Store
