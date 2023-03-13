import styled from "styled-components"

export const AbImg = styled.section`
  img {
    width: 404px;
    border-radius: 13px;

    @media (min-width: 240px) and (max-width: 580px) {
      width: 354px;
    }

    @media (min-width: 581px) and (max-width: 1180px) {
      width: 384px;
    }
  }
`
