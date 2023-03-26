import styled from "styled-components"

export const Nav = styled.nav`
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 999;

  @media screen and (max-width: 960px) {
    justify-content: flex-end;
    position: fixed;
    right: 0;
    top: 0;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul<{ isOpen: boolean }>`
  width: 38vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(10px);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`
