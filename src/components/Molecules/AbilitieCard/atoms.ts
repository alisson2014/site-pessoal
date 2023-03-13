import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  transition: all 0.4s ease-in-out;

  &.flip {
    transform: rotateY(180deg);
  }
`

export const Face = styled.div`
  width: 10.1rem;
  height: 10.1rem;
  padding: 6px 0;
  border-radius: 18px;
  background-color: #151515;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  &.front {
    flex-direction: column;
    gap: 5px;
  }

  &.back {
    transform: rotateY(180deg);
    padding: 20px;
  }

  @media screen and (max-width: 960px) {
    width: 9.7rem;
    height: 9.7rem;
    padding: 9px 0;
  }
`

export const Img = styled.div`
  font-size: 5.2em;
  font-weight: 400;
`
