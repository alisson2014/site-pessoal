import styled from "styled-components"

export const LinkLi = styled.li`
  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;
    transition: all 0.8s ease-in-out;

    @media (max-width: 710px) {
      font-size: 1.14rem;
    }
  }

  a:hover {
    color: #151515;
  }
`
