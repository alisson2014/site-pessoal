import { ProjectsBox } from "components";
import { SubTittle } from "components/Atoms/StyledTexts";
import { ProjectsContainer, Link } from "./style";
import React from "react";

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <SubTittle>Projetos</SubTittle>
      <ProjectsBox />
      <Link href="https://github.com/alisson2014?tab=repositories" target="_blank">
        Repositórios no github
      </Link>
    </ProjectsContainer>
  );
};

export default Projects;