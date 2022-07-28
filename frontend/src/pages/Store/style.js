import styled from 'styled-components'

/*------------------------------------------------------------Store------------------------------------------------------------*/

export const StoreContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: rgb(255, 255, 255);
  display: grid;
  place-items: center;
`
export const LogoStore = styled.img`
  width: clamp(180px, 200px, 350px);
  margin: auto;
  transition: transform 130ms ease-in-out;
  cursor: cursor;
  @media (max-width: 768px) {
    margin: 2rem auto 0;
  }
`

export const StoreHeader = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background: white;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
    border: none;
    border-bottom: 1px solid black;
  }
`

export const HeaderContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 7rem;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    ${'' /* border: none; */}
  }
`
export const Header = styled.div`
  width: 100%;
  margin: 2rem auto;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`
export const ContentContainer = styled.div`
  width: 90%;
  margin: 13rem auto 0;
  border: 1px solid rgb(0, 0, 0);
  @media (max-width: 768px) {
    width: 70%;
    margin: 16rem auto 0;
    border: none;
  }
`

export const OrderContentContainer = styled.div`
  width: 90%;
  margin: 13rem auto 0;
  border: 1px solid rgb(0, 0, 0);
  @media (max-width: 768px) {
    width: 100%;
    margin: 16rem auto 0;
    border: none;
  }
`
export const Copyright = styled.div`
  width: 100%;
  margin: auto;
  padding: 3.5rem;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
`

/*------------------------------------------------------------Vinylist------------------------------------------------------------*/

export const VinylListContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 1.5rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 2.5rem 0;
  }
`
export const ListWrapper = styled.div`
  width: 100%;
  margin: auto;
`
export const VinylList = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 2rem;
  border-radius: 10px;
`

/*------------------------------------------------------------VinylistItem------------------------------------------------------------*/

export const VinylItem = styled.div`
  width: 95%;
  margin: 1.5rem auto;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const VinylCoverContainer = styled.div`
  width: 100%;
  margin: auto;
`
export const VinylCover = styled.img`
  width: 100%;
  margin: 0 auto 10px;
  box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.25);
  transition: transform 100ms ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`

export const VinylData = styled.div`
  width: 100%;
  margin: 15px auto;
`

export const VinylDescription = styled.p`
  width: 100%;
  margin:  5px auto;
  text-align: justify;
  fontSize: 0.74rem;
`


export const VinylPurchase = styled.div`
  width: 100%;
  margin: 1.5rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VinylPurchaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.52rem 1rem;
  background: ${(props) => (props.voir ? 'black' : 'transparent')};
  border: 1px solid black;
  font-size: 0.7rem;
  font-family: var(--font-family-text);
  text-transform: uppercase;
  color: ${(props) => (props.voir ? 'white' : 'black')};
  opacity: 1;
  &: hover {
    cursor: pointer;
    color: white;
    background-color: ${(props) => (props.voir ? 'black' : 'rgb(129, 8, 8)')};
  }
`
