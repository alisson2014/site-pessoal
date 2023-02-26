import styled from "styled-components"

export const ProjectsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 1.35rem;
  font-weight: 400;

  :hover {
    transition: all 0.8s;
    color: #f8f8ff;
    opacity: 0.9;
  }
`
