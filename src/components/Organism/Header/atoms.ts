import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 13vh;
  border-bottom: 2px solid #f5f5f5;

  @media (max-width: 520px) {
    border: none;
    justify-content: flex-end;
  }
`
