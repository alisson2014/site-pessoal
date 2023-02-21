import styled from "styled-components"

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  .sobre {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .ola {
      font-size: 28px;
      font-weight: 400;
    }

    .nome {
      font-size: 52px;
      font-weight: 600;
    }

    .dev {
      font-size: 28px;
      font-weight: 400;
    }
  }

  .foto-github {
    border-radius: 50%;
    width: 300px;
    animation: goback 2.5s infinite alternate;
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
