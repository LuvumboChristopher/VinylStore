import styled from 'styled-components'

/*------------------------------------------------------------Video------------------------------------------------------------*/

export const LoginVideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`
export const LoginContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`
export const ContentContainer = styled.div`
  width: 70%;
  @media (max-width: 1200px) {
    width: 85%;
  }
`
export const LoginVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(3, 2, 2, 0.655);
`

/*------------------------------------------------------------Content------------------------------------------------------------*/

export const LoginHeader = styled.div`
  width:100%;
  text-align: center;
`
export const VsLogo = styled.img`
  width: clamp(280px, 37%, 600px);
  margin: 1.5rem auto;
  display: block;
  @media (max-width: 1200px) {
    margin: auto;
  }
`
export const LoginSubtitle = styled.p`
  margin: 0;
  font-size: 0.56rem;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
  @media (max-width: 1200px) {
    display: none;
  }
`
export const LoginForm = styled.form`
  width: 100%;
  display: grid;
  place-items: center;
`
export const LoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 3rem auto 1rem;
  border: none;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const LoginInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 1.5rem;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.555);
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  &:focus {
    outline: none;
    color: white;
    background-color: rgba(255, 255, 255, 0.552);
  }
`
export const LoginButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.555);
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: white;
  background-color: rgb(129, 8, 8);
  &:focus {
    outline: none;
    color: white;
    background-color: rgba(255, 255, 255, 0.552);
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(129, 8, 8, 0.837);
  }
`