import styled from "styled-components"

export const ContainerAb = styled.section`
  width: 65vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  gap: 15px;

  @media (max-width: 520px) {
    width: 88vw;
    gap: 9px;
  }
`
