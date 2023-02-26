import styled from "styled-components"

export const BoxContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 75px;
`

export const Box = styled.div`
  background-color: whitesmoke;
  width: 18rem;
  height: 10rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`

export const BoxText = styled.div`
  width: 100%;
  background-color: silver;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 400;
  padding: 1.12rem 0;
  transform: rotate(-45deg);

  :hover {
    letter-spacing: 0.2rem;
  }
`
