import CardProjects from "../../Atoms/CardProjects";
import * as Atoms from "./atoms";

const ProjectsBox = () => {
  return (
    <Atoms.BoxContainer>
      <CardProjects tittle="Calculator JS" text="
      Calculadora desenvolvida com HTML, CSS e JavaScript, implementei um theme switch, que permite ter o tema ligth e dark.
      " />
      <CardProjects tittle="Calculator JS" text="
      Calculadora desenvolvida com HTML, CSS e JavaScript, implementei um theme switch, que permite ter o tema ligth e dark.
      " />
      <CardProjects tittle="Calculator JS" text="
      Calculadora desenvolvida com HTML, CSS e JavaScript, implementei um theme switch, que permite ter o tema ligth e dark.
      " />
    </Atoms.BoxContainer>
  );
};

export default ProjectsBox;