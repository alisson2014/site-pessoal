import styled from "styled-components"

export const AvatarImg = styled.img`
  width: 315px;
  height: 315px;
  object-fit: cover;
  animation: morph 3.5s linear infinite;

  @media (min-width: 250px) and (max-width: 650px) {
    width: 245px;
    height: 245px;
  }

  @media (min-width: 651px) and (max-width: 1200px) {
    width: 285px;
    height: 285px;
  }

  @keyframes morph {
    0%,
    100% {
      border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    }
    34% {
      border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    }
    67% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    }
  }
`
