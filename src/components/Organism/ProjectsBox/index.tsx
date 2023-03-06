import CardButton from "../../Atoms/CardButton";
import CardProjects from "../../Molecules/CardProjects";
import * as Atoms from "./atoms";

const ProjectsBox = () => {
  return (
    <Atoms.BoxContainer>
      <CardProjects tittle="Calculator JS" text="
      Calculadora desenvolvida com HTML, CSS e JavaScript, implementei um theme switch, que permite transitar entre o tema ligth e dark.
      ">
        <CardButton
          repoHref="https://github.com/alisson2014/calculator-js"
          deployHref="https://alisson2014.github.io/calculator-js/"
        />
      </CardProjects>
      <CardProjects tittle="CRUD JS" text="
      Sistema de cadastro de usuários, podendo criar, ler, editar e deleta-los. Desenvolvido com HTML, Bootstrap e JavaScript.
      ">
        <CardButton
          repoHref="https://github.com/alisson2014/crud-js"
          deployHref="https://alisson2014.github.io/crud-js/"
        />
      </CardProjects>
      <CardProjects tittle="Brogui PHP" text="
      Blog desenvolvido no bootcamp catalisa do Integrado, com interação com banco de dados SQL.
      ">
        <CardButton
          repoHref="https://github.com/alisson2014/brogui-bootcamp" />
      </CardProjects>
    </Atoms.BoxContainer>
  );
};

export default ProjectsBox;