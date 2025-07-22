import CardProjects from "../../Molecules/ProjectsCard";
import { BoxContainer } from "./style";
import { Project } from "pages/LandingPage/types";

const ProjectsBox = ({ projects }: { projects: Project[] }) => {
  return (
    <BoxContainer>
      {projects.map((project) => (
        <CardProjects {...project} />
      ))}
    </BoxContainer>
  );
};

export default ProjectsBox;