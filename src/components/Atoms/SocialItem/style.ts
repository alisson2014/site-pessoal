import styled from "styled-components"

export const LiItem = styled.li`
  a {
    font-size: 2.9em;

    &:hover {
      font-size: 3.2em;
      transition: all 0.5s ease-in-out;
    }

    @media (max-width: 520px) {
      font-size: 2.5em;

      &:hover {
        font-size: 2.65em;
      }
    }
  }
`
