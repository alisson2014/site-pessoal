import { Project } from "context/AboutJsonContext/types";
import { ThirdTittle } from "../../Atoms/StyledTexts";
import * as Atoms from "./atoms";
import React from "react";

const CardProjects: React.FC<Project> = ({
  name, description, image, deployLink, repository
}) => {
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