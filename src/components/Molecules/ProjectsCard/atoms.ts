import styled from "styled-components"
import { TextContent } from "../../Atoms/StyledTexts"

export const PContainer = styled.div`
  //FlexBox
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  //Tamanhos
  width: 20rem;
  height: 24rem;
  padding: 18px 34px;
  background-color: #151515;
  border-radius: 16px;

  @media (min-width: 651px) and (max-width: 960px) {
    width: 18.6rem;
    height: 22.8rem;
    padding: 15px 33px;
  }

  @media (min-width: 250px) and (max-width: 650px) {
    width: 18.2rem;
    height: 22.5rem;
    padding: 12px 32px;
  }
`

export const TextContainer = styled(TextContent)`
  font-size: 1rem;
`

export const ContentImg = styled.img`
  width: 100%;
  border-radius: 16px;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const SMButton = styled.button`
  padding: 7px 21px;
  font-size: 1.05em;
  font-weight: 500;
  border: 0;
  border-radius: 12px;
  background-color: whitesmoke;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    letter-spacing: 2px;
    transform: scale(1.01);
  }

  a {
    text-decoration: none;
    color: #151515;
  }

  @media screen and (max-width: 960px) {
    font-size: 1em;
  }
`
