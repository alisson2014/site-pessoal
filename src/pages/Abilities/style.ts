import styled from "styled-components"

export const AbilitiesConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;

  @media screen and (max-width: 1240px) {
    min-height: 100vh;
    height: auto; 
  }
`
