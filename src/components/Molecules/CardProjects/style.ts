import styled from "styled-components"
import { TextContent } from "../../Atoms/StyledTexts"

export const PContainer = styled.div`
  //FlexBox
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  //Tamanhos
  width: 19.3rem;
  height: 14.2rem;
  padding: 18px 34px;
  background-color: #151515;
  border-radius: 16px;

  //Animação hover
  filter: blur(0.08px);
  -webkit-filter: blur(0.08px);
  opacity: 0.9;
  transition: all 0.75s ease-in-out;

  &:hover {
    filter: blur(0);
    opacity: 1;
  }
`

export const TextContainer = styled(TextContent)`
  font-size: 1rem;
`
