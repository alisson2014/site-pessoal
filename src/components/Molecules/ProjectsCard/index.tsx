import { Project } from "pages/LandingPage/types";
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
  name, description, image, deployLink, repository
}: Project) => {
  return (
    <Atoms.PContainer>
      <ThirdTittle>{name}</ThirdTittle>
      {image && (
        <Atoms.ContentImg src={image.url} alt={image.title} title={image.title} />
      )}
      <Atoms.TextContainer>{description}</Atoms.TextContainer>
      {deployLink ? (
        <Atoms.ButtonContainer>
          <Atoms.SMButton>
            <a href={deployLink} target="_blank">
              Visualizar
            </a>
          </Atoms.SMButton>
          <Atoms.SMButton>
            <a href={repository} target="_blank">
              Repositório
            </a>
          </Atoms.SMButton>
        </Atoms.ButtonContainer>
      ) : (
        <Atoms.SMButton>
          <a href={repository} target="_blank">
            Repositório
          </a>
        </Atoms.SMButton>
      )}
    </Atoms.PContainer>
  );
};


export default CardProjects;