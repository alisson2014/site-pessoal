import styled from "styled-components"

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

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
export const Tittle = styled.h1`
  font-size: 54px;
  font-weight: 600;
`

export const TittleContent = styled.span`
  font-size: 28px;
  font-weight: 400;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`
