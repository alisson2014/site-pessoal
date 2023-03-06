import styled from "styled-components"

export const AboutContainer = styled.main`
  display: flex;
  align-items: center;
  gap: 150px;
  padding: 0 210px;

  @media (max-width: 710px) {
    flex-direction: column;
    gap: 30px;
    padding: 0 35px;
    margin: 30px 0;
  }
`
