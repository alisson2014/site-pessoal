import { ThirdTittle } from "../../Atoms/StyledTexts";
import * as Atoms from "./atoms";

interface ICardProjects {
  title: string
  text: string
  image: string
  deployHref?: string
  repoHref: string
}

const CardProjects = ({
  title, text, image, deployHref, repoHref
}: ICardProjects) => {
  return (
    <Atoms.PContainer>
      <ThirdTittle>{title}</ThirdTittle>
      <Atoms.ContentImg src={image} alt={title} title={title} />
      <Atoms.TextContainer>{text}</Atoms.TextContainer>
      {deployHref ? (
        <Atoms.ButtonContainer>
          <Atoms.SMButton>
            <a href={deployHref} target="_blank">
              Visualizar
            </a>
          </Atoms.SMButton>
          <Atoms.SMButton>
            <a href={repoHref} target="_blank">
              Repositório
            </a>
          </Atoms.SMButton>
        </Atoms.ButtonContainer>
      ) : (
        <Atoms.SMButton>
          <a href={repoHref} target="_blank">
            Repositório
          </a>
        </Atoms.SMButton>
      )}
    </Atoms.PContainer>
  );
};


export default CardProjects;