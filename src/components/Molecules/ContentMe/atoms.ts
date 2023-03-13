import styled from "styled-components"

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  @media screen and (max-width: 960px) {
    align-items: center;
    gap: 6px;
  }
`

export const MeTittle = styled.span`
  font-size: 2rem;
  font-weight: 300;

  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 1.7rem;
  }
`
