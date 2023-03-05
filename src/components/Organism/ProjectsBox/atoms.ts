import styled from "styled-components"

export const BoxContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 75px;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 30px;
  }
`

export const Box = styled.ul`
  background-color: #151515;
  width: 16rem;
  height: 10rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 520px) {
    width: 14rem;
    height: 7.5rem;
  }
`
