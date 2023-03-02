import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  transition: all 0.5s;

  &.flip {
    transform: rotateY(180deg);
  }
`

export const Face = styled.div`
  width: 10rem;
  height: 10rem;
  padding: 6px 0;
  border-radius: 14px;
  cursor: pointer;
  background-color: #252525;

  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  &.front {
    flex-direction: column;
    gap: 5px;
    background-color: #252525;
  }

  &.back {
    transform: rotateY(180deg);
    padding: 20px;
  }
`

export const Img = styled.div`
  font-size: 5.2em;
  font-weight: 400;
`

export const TextContent = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  text-align: justify;
`
