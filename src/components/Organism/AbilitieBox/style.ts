import styled from "styled-components"

export const ContainerAb = styled.section`
  width: 65vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  gap: 25px 40px;

  @media (min-width: 240px) and (max-width: 640px) {
    width: 82vw;
    gap: 15px 25px;
  }

  @media (min-width: 641px) and (max-width: 1140px) {
    width: 78vw;
    gap: 20px 30px;
  }
`
