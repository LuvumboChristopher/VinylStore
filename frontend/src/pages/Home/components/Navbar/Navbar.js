import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const fadeNavIn = keyframes`
  to {
    transform: translateY(-50%) translateX(0);
    opacity: 1;
  }
`
const NavContainer = styled.div`
  z-index: 1;
  position: fixed;
  left: 1%;
  top: 50%;
  transform: translateY(-50%) translateX(-100px);
  background: none;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 50px;
  opacity: 0;
  animation: ${fadeNavIn} 1s ease 1 1s forwards;
`
const NavLink = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`
const NavIcon = styled.a`
  width: 14px;
  height: 14px;
  background-color: rgba(0, 0, 0, 0.305);
  border-radius: 50%;
  border: 1px solid white;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);
  }
`
const NavTitle = styled.p`
  color: rgb(255, 255, 255);
  display: none;

  ${NavLink}:hover & {
    display: block;
  }
`

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <NavContainer>
      <NavLink>
        <NavIcon href='#accueil'></NavIcon>
        <NavTitle>Accueil</NavTitle>
      </NavLink>

      <NavLink>
        <NavIcon href='#umdp'></NavIcon>
        <NavTitle>UMDP</NavTitle>
      </NavLink>

      <NavLink>
        <NavIcon href='#services'></NavIcon>
        <NavTitle>Services</NavTitle>
      </NavLink>

      <NavLink>
        <NavIcon onClick={() => navigate('/store')}></NavIcon>
        <NavTitle>Store</NavTitle>
      </NavLink>

      <NavLink>
        <NavIcon href='#contact'></NavIcon>
        <NavTitle>Contact</NavTitle>
      </NavLink>
    </NavContainer>
  )
}

export default Navbar
