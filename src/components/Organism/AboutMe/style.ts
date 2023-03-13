import styled from "styled-components"

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 960px) {
    gap: 12px;
    align-items: center;
  }
`

export const TextContent = styled.p`
  font-size: 26px;
  font-weight: 300;
  text-align: justify;

  @media screen and (max-width: 960px) {
    font-size: 23px;
  }
`
