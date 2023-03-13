import styled from "styled-components"

export const LinkLi = styled.li`
  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;
    transition: all 0.6s ease-in-out;

    @media (max-width: 960px) {
      font-size: 1.15rem;
    }

    &:hover {
      color: #151515;
    }
  }
`
