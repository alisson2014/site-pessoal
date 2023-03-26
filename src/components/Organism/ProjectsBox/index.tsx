import CardProjects from "../../Molecules/ProjectsCard";
import { BoxContainer } from "./style";
import projects from "./projects.json";

const ProjectsBox = () => {
  return (
    <BoxContainer>
      {projects.map((project) => (
        <CardProjects {...project} />
      ))}
    </BoxContainer>
  );
};

export default ProjectsBox;