import { Link } from "react-router-dom";
import styled from "styled-components";


import SingupFond from '../../assets/img/singup_fond.png'

export const SingupContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    color: rgb(0, 0, 0);
`

export const SingupImg = styled.div`
    width: 100%;
    background: url(${SingupFond});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 60%;
    @media (max-width: 1260px) {
        display: none;
    }
`

export const SingupFormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    flex: 50%;
    border-left: 5px solid black;
    @media (max-width: 1260px) {
        color: white;
        background: url(${SingupFond});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`

export const SingupFormContent = styled.div`
    width: 80%;
    margin: auto;
`

export const SingupFormHeader = styled.header`
    margin:  0 auto 3rem;
`

export const SingupTitle = styled.h1`
    font-family: var(--font-family-title);
    font-size: 4.2rem;
    width: 100%;
    margin: 0;
    text-transform: none;
    text-align: center;
`

export const SingupSubtitle = styled.p`
    margin: 0;
    font-size: 0.45rem;
    text-transform: uppercase;
    letter-spacing: 10px;
    text-align: center;
`

export const SingupForm = styled.form`
    width: 80%;
    margin: auto;
    display: grid;
    place-items: center;
`
export const SingupInputsContainer= styled.div`
    width: 80%;
    margin: auto;
    display: grid;
    place-items: center;
`


export const LoginScreenLink = styled(Link)`
    font-size: 0.86rem;
    margin: 1rem auto;
    padding: 0.3rem;
    color: rgb(0, 0, 0);
    &:hover {
        color: rgba(0, 0, 0, 0.705);
    }
    @media (max-width: 1260px) {
        color: white;
    }
`

export const SingupButton = styled.button`
    width: fit-content;
    margin: 1rem auto;
    padding: 0.5rem 2rem;
    background: rgb(0, 0, 0);
    font-size: 0.8rem;
    font-family: var(--font-family-text);
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    opacity: 1;
    border: none;
    cursor: pointer;
    @media (max-width: 1260px) {
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    }
    &:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(129, 8, 8);
    }
`

export const errorMessage = styled.span`
    width: 100%;
    font-size: 12px;
    color: red;
    display: none;
`