import styled from "styled-components"

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7rem;
  padding: 0 210px;
  height: 100vh; 

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center; 
    
    min-height: 100vh;
    height: auto; 

    gap: 3rem; 
    padding: 6rem 2rem; 
    margin: 0; 
  }
`