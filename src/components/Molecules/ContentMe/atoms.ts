import styled from "styled-components"

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 520px) {
    gap: 5px;
    align-items: center;
  }
`

export const MeTittle = styled.span`
  font-size: 30px;
  font-weight: 300;

  @media (max-width: 520px) {
    font-size: 27px;
  }
`
