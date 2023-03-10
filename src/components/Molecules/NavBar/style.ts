import styled from "styled-components"

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

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
    z-index: 10000;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  width: 34vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    z-index: 1000;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`
