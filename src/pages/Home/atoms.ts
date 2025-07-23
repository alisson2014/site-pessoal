import styled from "styled-components"

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 960px) {
    padding: 15px 0;
    gap: 23px;
    flex-direction: column-reverse;
    justify-content: center;
  }
`
