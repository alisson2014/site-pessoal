import styled from "styled-components"

export const List = styled.ul`
  list-style: none;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;
  margin-bottom: 14px;

  @media (max-width: 520px) {
    width: 100%;
    justify-content: center;
    gap: 28px;
  }
`
