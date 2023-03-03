import styled from "styled-components"

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 520px) {
    align-items: center;
  }
`

export const TextContent = styled.p`
  font-size: 26px;
  font-weight: 300;
  text-align: justify;

  @media (max-width: 520px) {
    font-size: 23px;
  }
`