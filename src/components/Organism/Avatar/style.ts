import styled from "styled-components"

export const AvatarImg = styled.img`
  border-radius: 50%;
  width: 300px;
  animation: goback 2s infinite alternate;

  @keyframes goback {
    from {
      transform: translateY(12px);
    }

    to {
      transform: translateY(0);
    }
  }

  @media (max-width: 710px) {
    width: 230px;
  }
`
