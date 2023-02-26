import { SubTittle } from "../../components/Atoms/Tittles";
import * as Atoms from "./atoms";

const Projects = () => {
  return (
    <Atoms.Container>
      <SubTittle>Projetos</SubTittle>
      <Atoms.BoxContainer>
        <Atoms.Box>
          <Atoms.BoxText>Em breve</Atoms.BoxText>
        </Atoms.Box>
        <Atoms.Box>
          <Atoms.BoxText>Em breve</Atoms.BoxText>
        </Atoms.Box>
        <Atoms.Box>
          <Atoms.BoxText>Em breve</Atoms.BoxText>
        </Atoms.Box>
      </Atoms.BoxContainer>
      <Atoms.Link href="https://github.com/alisson2014?tab=repositories" target="_blank">
        Repositórios no github
      </Atoms.Link>
    </Atoms.Container>
  );
};

export default Projects;