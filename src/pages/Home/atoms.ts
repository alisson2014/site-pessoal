import styled from "styled-components"

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 520px) {
    gap: 18px;
    flex-direction: column-reverse;
    justify-content: center;
  }
`
