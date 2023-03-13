import styled from "styled-components"

export const BoxContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    gap: 35px 20px;
  }
`
