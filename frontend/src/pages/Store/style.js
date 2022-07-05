import styled from 'styled-components'

/*------------------------------------------------------------Store------------------------------------------------------------*/

export const StoreContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.589);
  display: grid;
  place-items: center;

`



export const HeaderContainer = styled.div`
  width: 100%;
  height: 7rem;
  background-color: white;
  position: fixed;
  top: 0;
  display: grid;
  place-items: center;
  border-bottom: 2px solid black;
`
export const Header = styled.div`
  width: 100%;
  margin: 1.5rem auto 0;
`
export const ContentContainer = styled.div`
  width: 90%;
  margin: 15rem auto 0;
  padding-top: 3rem;
  padding-bottom: 2rem;
  border: 2px solid rgb(0, 0, 0);
`
export const Copyright = styled.div`
  width: 100%;
  margin: 3rem auto;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
`

/*------------------------------------------------------------Vinylist------------------------------------------------------------*/

export const VinylListContainer = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  place-items: center;
  align-items: center;
  text-align: center;
`
export const ListWrapper = styled.div`
  width: 100%;
  margin: auto;
`
export const VinylList = styled.div`
  width: 96%;
  margin: auto auto 1rem;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem;
`

/*------------------------------------------------------------VinylistItem------------------------------------------------------------*/

export const VinylItem = styled.div`
  width: 230px;
  margin: 2rem;
`

export const VinylCoverContainer = styled.div`
  width: 100%;
  margin: auto;
`
export const VinylCover = styled.img`
  width: 100%;
  margin: 0 auto 2rem;
  box-shadow: 2px 3px 23px -3px rgba(0,0,0,0.25);
`

export const VinylData = styled.div`
  width: 100%;
  margin: auto;
  text-align: justify;
`

export const VinylPurchase = styled.div`
  width: 100%;
  margin: 1.8rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VinylPurchaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.52rem 0.8rem;
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
    background-color: ${(props) =>
      props.voir ? 'black' : 'rgb(129, 8, 8)'};
  }
`