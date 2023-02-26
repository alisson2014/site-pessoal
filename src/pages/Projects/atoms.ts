import styled from "styled-components"

export const ProjectsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 1.35rem;
  font-weight: 500;

  :hover {
    transition: all 0.8s;
    color: #141414;
    opacity: 0.9;
  }
`
