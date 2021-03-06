import React from 'react'
import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'


const SearchWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  border: none;
  border-bottom: 1px solid black;
`

const SearchInput = styled.input`
  width: 100%;
  margin: auto;
  border: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.60rem;
  &:focus {
    outline: none;
  }
`

export const Input = ({ setSerchTerm }) => {
  return (
    <>
      <SearchInput
        type='text'
        name='search'
        id='search'
        placeholder='chercher'
        onChange={(e) => setSerchTerm(e.target.value.toLowerCase())}
      />
      <IoSearch className='search_icon' />
    </>
  )
}

export const InputSearch = ({ setSerchTerm }) => {
  return (
      <SearchWrapper>
        <Input setSerchTerm={setSerchTerm} />
      </SearchWrapper>
  )
}
