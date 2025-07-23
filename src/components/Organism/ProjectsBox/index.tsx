import { useAboutJson } from "context/AboutJsonContext/useAboutJson";
import CardProjects from "../../Molecules/ProjectsCard";
import { BoxContainer } from "./style";
import React from "react";

const ProjectsBox: React.FC = () => {
  const { projects } = useAboutJson();

  return (
    <BoxContainer>
      {projects.map(project => <CardProjects {...project} key={project.id} />)}
    </BoxContainer>
  );
};

export default ProjectsBox;