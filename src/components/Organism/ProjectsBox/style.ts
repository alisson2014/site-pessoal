import styled from "styled-components"

export const BoxContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: 710px) {
    flex-direction: column;
    gap: 30px;
  }
`
