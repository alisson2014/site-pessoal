import styled from "styled-components"

export const SocialItem = styled.li`
  a {
    font-size: 2.5em;

    :hover {
      font-size: 2.6em;
      transition: all 0.5s;
    }

    @media (max-width: 520px) {
      font-size: 2.3em;

      :hover {
        font-size: 2.45em;
      }
    }
  }
`
