import { ButtonContainer, SMButton } from "./style";

interface ICardButton {
  deployHref?: string
  repoHref: string
}

const CardButton = ({ deployHref, repoHref }: ICardButton) => {
  return (
    <ButtonContainer>
      {deployHref ? (
        <>
          <SMButton>
            <a href={deployHref} target="_blank">
              Visualizar
            </a>
          </SMButton>
          <SMButton>
            <a href={repoHref} target="_blank">
              Repositório
            </a>
          </SMButton>
        </>
      ) : (
        <SMButton>
          <a href={repoHref} target="_blank">
            Repositório
          </a>
        </SMButton>
      )}
    </ButtonContainer>
  );
};

export default CardButton;