import styled from "styled-components"

export const ButtonContainer = styled.div`
  display: flex;
  gap: 17.5px;
`

export const SMButton = styled.button`
  padding: 7px 21px;
  font-size: 1.05em;
  font-weight: 500;
  border: 0;
  border-radius: 12px;
  background-color: whitesmoke;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    letter-spacing: 2px;
    transform: scale(1.01);
  }

  a {
    text-decoration: none;
    color: #151515;
  }
`
