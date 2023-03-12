import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
  border-bottom: 2px solid #f5f5f5;

  @media (max-width: 720px) {
    border: none;
  }
`
