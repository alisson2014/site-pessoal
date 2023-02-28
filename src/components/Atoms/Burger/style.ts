import styled from "styled-components"

export const Burguer = styled.div`
  display: none;

  @media (max-width: 520px) {
    display: block;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${(isOpen) => (isOpen ? "#f1f1f1" : "#333")};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${(isOpen) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        transform: ${(isOpen) =>
          isOpen ? "translateX(100%)" : "translateX(0%)"};
        opacity: ${(isOpen) => (isOpen ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${(isOpen) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`
