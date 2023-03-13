import styled from "styled-components"

export const Component = styled.button`
  background-color: ${({ color }) => (color ? color : "#252525")};
  width: 396px;
  height: 81px;
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

  @media (min-width: 651px) and (max-width: 1200px) {
    font-size: 1.8em;
    width: 338px;
    height: 75px;

    &:hover {
      transform: scale(1.038);
    }
  }

  @media (min-width: 250px) and (max-width: 650px) {
    font-size: 1.68rem;
    width: 282px;
    height: 64px;
  }
`
