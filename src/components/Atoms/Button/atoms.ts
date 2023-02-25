import styled from "styled-components"

export const Component = styled.button`
  background-color: ${({ color }) => (color ? color : "#f5f5f5")};
  width: 27vw;
  height: 10vh;
  text-align: center;
  font-size: 2.2em;
  font-weight: 400;
  border: 0;
  border-radius: 44px;
  cursor: pointer;

  :hover {
    letter-spacing: 10px;
    transform: scale(1.01);
    transition: all 0.6s ease-in-out;
  }

  a {
    text-decoration: none;
  }
`
