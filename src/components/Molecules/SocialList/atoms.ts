import styled from "styled-components"

export const SocialList = styled.ul`
  list-style: none;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;

  @media (max-width: 520px) {
    width: 100%;
    justify-content: center;
    gap: 28px;
  }
`
