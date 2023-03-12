import styled from "styled-components"

export const ContainerAb = styled.section`
  width: 65vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  gap: 25px 40px;

  @media screen and (max-width: 1100px) {
    width: 88vw;
    gap: calc(7vw - 14px) calc(3vh - 18px);
  }
`
