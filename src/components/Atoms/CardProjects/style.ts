import styled from "styled-components"

export const PContainer = styled.div`
  //FlexBox
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  //Tamanhos
  width: 16rem;
  height: 13.5rem;
  padding: 18px 28px;
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
