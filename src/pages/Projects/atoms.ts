import styled from "styled-components"

export const ProjectsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media (max-width: 710px) {
    gap: 20px;
    margin: 20px 0;
  }
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 1.35rem;
  font-weight: 500;
  transition: all 0.8s;

  &:hover {
    color: #141414;
    opacity: 0.9;
  }
`
