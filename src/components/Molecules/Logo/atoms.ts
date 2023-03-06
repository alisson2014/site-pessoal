import styled from "styled-components"

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 710px) {
    display: none;
  }
`

export const Icon = styled.div`
  font-size: 2.1rem;
  font-weight: 600;
`

export const Tittle = styled.div`
  font-size: 1.25rem;
  text-transform: uppercase;

  &.t-1 {
    font-weight: 600;
  }

  &.t-2 {
    font-weight: 300;
  }
`
