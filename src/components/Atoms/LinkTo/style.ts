import styled from "styled-components"

export const LinkLi = styled.li`
  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;

    @media (max-width: 960px) {
      font-size: 1.15rem;
    }

    &:hover {
      cursor: pointer;
      color: #252525;
    }
  }
`
