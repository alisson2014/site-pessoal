import * as Atoms from "./atoms";

const Projects = () => {
  return (
    <Atoms.Container>
      <Atoms.Tittle>Projetos</Atoms.Tittle>
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
      <Atoms.Link href="/">
        Repositórios no github
      </Atoms.Link>
    </Atoms.Container>
  );
};

export default Projects;