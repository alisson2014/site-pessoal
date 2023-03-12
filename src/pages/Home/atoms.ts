import styled from "styled-components"

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 880px) {
    padding: 15px 0;
    gap: 18px;
    flex-direction: column-reverse;
    justify-content: center;
  }
`
