import styled from "styled-components"

export const ProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  @media screen and (max-width: 960px) {
    min-height: 100vh;
    height: auto; 
    gap: 20px;
    margin: 20px 0;
  }
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 1.35rem;
  font-weight: 500;
  transition: all 0.8s ease-in-out;

  &:hover {
    color: #151515;
  }
`
