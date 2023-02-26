import { Button } from "../../components";
import { SubTittle } from "../../components/Atoms/Tittles";
import * as Atoms from "./atoms"

const About = () => {
  return (
    <Atoms.Container>
      <Atoms.Content>
        <SubTittle>Sobre mim</SubTittle>
        <Atoms.TextContent>
          Meu nome é alisson e sou apaixonado por tecnologia, atualmente estou cursando Análise e desenvolvimento de sistemas no Integrado e estudando back end com java e spring boot.
        </Atoms.TextContent>
        <Atoms.TextContent>
          Desenvolvo soluções em tecnologia, usando as melhores tecnologias do mercado, como o ecossistema ReactJS.
        </Atoms.TextContent>
        <Button text="Baixe meu cv" />
      </Atoms.Content>
      <div>
        A decidir
      </div>
    </Atoms.Container>
  );
};

export default About