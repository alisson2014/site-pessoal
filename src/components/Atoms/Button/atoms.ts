import styled from "styled-components"

export const Button = styled.button`
  width: 455px;
  height: 84px;
  text-align: center;
  background-color: whitesmoke;
  font-size: 2.2em;
  font-weight: 400;
  border: 0;
  border-radius: 44px;
  cursor: pointer;

  :hover {
    letter-spacing: 11px;
    transform: scale(1.015);
    transition: all 0.6s ease-in-out;
  }

  a {
    text-decoration: none;
  }
`
