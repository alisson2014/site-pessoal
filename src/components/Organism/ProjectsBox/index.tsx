import CardProjects from "../../Molecules/ProjectsCard";
import { BoxContainer } from "./style";

const imageArray: string[] = [
  require("./images/brogui.jpg"),
  require("./images/calculator.jpg"),
  require("./images/crud.jpg")
];

const ProjectsBox = () => {
  return (
    <BoxContainer>
      <CardProjects title="Calculator JS" text="
      Calculadora desenvolvida com HTML, CSS e JavaScript, implementei um theme switch, que permite transitar entre o tema ligth e dark." image={imageArray[1]}
        repoHref="https://github.com/alisson2014/calculator-js" deployHref="https://alisson2014.github.io/calculator-js/" />

      <CardProjects title="CRUD JS" text="
      Sistema de cadastro de usuários, podendo criar, ler, editar e deleta-los. Desenvolvido com HTML, Bootstrap e JavaScript." image={imageArray[2]}
        repoHref="https://github.com/alisson2014/crud-js" deployHref="https://alisson2014.github.io/crud-js/" />

      <CardProjects title="Brogui PHP" text="
      Blog desenvolvido no bootcamp catalisa do Integrado, com interação com banco de dados SQL."
        image={imageArray[0]} repoHref="https://github.com/alisson2014/brogui-bootcamp" />
    </BoxContainer>
  );
};

export default ProjectsBox;