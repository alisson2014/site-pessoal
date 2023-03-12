import styled from "styled-components"

export const BoxContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 50px;

  @media (max-width: 710px) {
    flex-direction: column;
    gap: 30px;
  }
`