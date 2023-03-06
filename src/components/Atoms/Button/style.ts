import styled from "styled-components"

export const Component = styled.button`
  background-color: ${({ color }) => (color ? color : "#252525")};
  width: 26vw;
  height: 9.5vh;
  text-align: center;
  font-size: 2.25em;
  font-weight: 500;
  border: 0;
  border-radius: 44px;
  cursor: pointer;
  transition: all 0.6s ease-in-out;

  &:hover {
    letter-spacing: 7px;
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 710px) {
    font-size: 1.8em;
    width: 68vw;

    &:hover {
      letter-spacing: 4px;
      transform: scale(1.035);
    }
  }
`
