import styled from "styled-components"

export const Card = styled.div`
  width: 10rem;
  height: 10rem;
  padding: 10px;
  border-radius: 11px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #252525;
  opacity: 0.9;
  cursor: pointer;

  :hover {
    transition: all .5s;
    opacity: 1;
  }
`

export const Img = styled.div`
  font-size: 4.8em;
  font-weight: 400;
`
