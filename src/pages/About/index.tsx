import * as Atoms from "./atoms"

const About = () => {
  return (
    <Atoms.Container>
      <Atoms.Content>
        <Atoms.Tittle>Sobre mim</Atoms.Tittle>
        <Atoms.TextContent>
          Meu nome é alisson e sou apaixonado por tecnologia, atualmente estou cursando Análise e desenvolvimento de sistemas no Integrado e estudando back end com java e spring boot.
        </Atoms.TextContent>
        <Atoms.TextContent>
          Desenvolvo soluções em tecnologia, usando as melhores tecnologias do mercado, como o ecossistema ReactJS.
        </Atoms.TextContent>
      </Atoms.Content>
      <div>
        A decidir
      </div>
    </Atoms.Container>
  );
};

export default About