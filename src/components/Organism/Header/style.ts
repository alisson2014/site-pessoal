import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed; 
  top: 0;          
  left: 0;         
  width: 100%;     
  z-index: 1000;  
  background-color: #2b86ff; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 960px) {
    justify-content: flex-start;
    border: none;
  }
`