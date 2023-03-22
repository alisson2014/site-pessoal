import styled from "styled-components"

export const ContainerAb = styled.section`
  width: 70vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  gap: 25px;

  @media (min-width: 240px) and (max-width: 640px) {
    width: 86vw;
    gap: 10px 4px;
  }

  @media (min-width: 641px) and (max-width: 1140px) {
    width: 95vw;
    gap: 18px;
  }
`
