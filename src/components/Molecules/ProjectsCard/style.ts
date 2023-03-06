import styled from "styled-components"
import { TextContent } from "../../Atoms/StyledTexts"

export const PContainer = styled.div`
  //FlexBox
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  //Tamanhos
  width: 18.8rem;
  height: 14.3rem;
  padding: 18px 34px;
  background-color: #151515;
  border-radius: 16px;

  //Animação hover
  filter: blur(0.05px);
  -webkit-filter: blur(0.05px);
  opacity: 0.95;
  transition: all 0.5s ease-in-out;

  &:hover {
    filter: blur(0);
    opacity: 1;
  }

  @media (max-width: 520px) {
    width: 18.15rem;
    height: 14.85rem;
    padding: 15px 33px;
  }
`

export const TextContainer = styled(TextContent)`
  font-size: 1.05rem;
`
