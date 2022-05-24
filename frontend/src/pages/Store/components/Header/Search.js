import React from 'react'
import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'

const SearchWrapperContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
`
const SearchWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid black;
`
const SearchInput = styled.input`
  width: 100%;
  margin: auto;
  border: none;
  background: none;
  text-transform: uppercase;
  letter-spacing: 5px;

  &:focus {
    outline: none;
  }
`

export const Input = ({ setSerchTerm }) => {
  return (
    <SearchWrapperContainer>
      <SearchInput
        type='text'
        name='search'
        id='search'
        placeholder='chercher'
        onChange={(e) => setSerchTerm(e.target.value.toLowerCase())}
      />
      <IoSearch className='search_icon' />
    </SearchWrapperContainer>
  )
}

export const Search = () => {
  return (
    <SearchWrapperContainer>
      <SearchWrapper></SearchWrapper>
    </SearchWrapperContainer>
  )
}

export const InputSearch = ({ setSerchTerm }) => {
  return (
    <SearchWrapperContainer>
      <SearchWrapper>
        <Input setSerchTerm={setSerchTerm} />
      </SearchWrapper>
    </SearchWrapperContainer>
  )
}
