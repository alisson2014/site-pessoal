import styled from "styled-components"

export const AvatarImg = styled.img`
  width: 310px;
  border-radius: 50%;
  animation: goback 2s infinite alternate;

  @media (min-width: 250px) and (max-width: 650px) {
    width: 240px;
  }

  @media (min-width: 651px) and (max-width: 1200px) {
    width: 280px;
  }

  @keyframes goback {
    from {
      transform: translateY(12px);
    }

    to {
      transform: translateY(0);
    }
  }
`
