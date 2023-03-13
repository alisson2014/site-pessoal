import styled from "styled-components"

export const LiItem = styled.li`
  a {
    font-size: 3em;
    transition: all 0.5s ease-in-out;
    padding: 12px;
    border-radius: 100%;
    display: flex;
    align-items: center;

    &:hover {
      font-size: 3.2em;
      background-color: #151515;
    }

    @media scren and (max-width: 960px) {
      font-size: 2.7em;

      &:hover {
        font-size: 2.8em;
      }
    }
  }
`
