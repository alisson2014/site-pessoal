import * as Atoms from "./atoms"

const About = () => {
  return (
    <Atoms.Container>
      <Atoms.Content>
        <Atoms.Tittle>Sobre mim</Atoms.Tittle>
        <Atoms.TextContent>
          Meu nome é alisson e sou apaixonado por tecnologia, atualmente estou cursando Análise e desenvolvimento de sistemas no Integrado.
        </Atoms.TextContent>
        <Atoms.TextContent>
          Desenvolvo soluções em front end, usando React para web e React Native para mobile.
        </Atoms.TextContent>
      </Atoms.Content>
      <div>
        A decidir
      </div>
    </Atoms.Container>
  );
};

export default About