import styled from "styled-components"

export const Nav = styled.nav`
  width: 33%;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;

  @media (max-width: 520px) {
    display: none;
    flex-direction: column;
    gap: 6px;
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`
