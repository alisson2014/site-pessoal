import { ProjectsBox } from "components";
import { SubTittle } from "components/Atoms/StyledTexts";
import { ProjectsContainer, Link } from "./style";
import { Project } from "pages/LandingPage/types";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <ProjectsContainer>
      <SubTittle>Projetos</SubTittle>
      <ProjectsBox projects={projects} />
      <Link href="https://github.com/alisson2014?tab=repositories" target="_blank">
        Repositórios no github
      </Link>
    </ProjectsContainer>
  );
};

export default Projects;