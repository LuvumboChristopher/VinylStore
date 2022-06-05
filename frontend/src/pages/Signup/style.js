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
    flex: 0.8;
`

export const SingupFormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    flex: 0.5;
    border-left: 5px solid black;
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
    font-size: 4rem;
    width: 100%;
    margin: 0;
    text-transform: none;
    text-align: center;
`

export const SingupSubtitle = styled.p`
    margin: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 10px;
    text-align: center;
`