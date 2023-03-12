import styled from "styled-components"

export const AbImg = styled.section`
  img {
    width: calc(28vw - 13px);
    border-radius: 13px;

    @media screen and (max-width: 880px) {
      width: 65vw;
    }
  }
`
