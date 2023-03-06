import styled from "styled-components"

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 710px) {
    padding: 15px 0;
    gap: 18px;
    flex-direction: column-reverse;
    justify-content: center;
  }
`
