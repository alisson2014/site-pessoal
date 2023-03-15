import Button from "../../Atoms/Button";
import { SubTittle } from "../../Atoms/StyledTexts";
import { Content, TextContent } from "./style";

const curriculo: string = require("./assets/curriculo.pdf");

const AboutMe = () => {
  return (
    <Content>
      <SubTittle>Sobre mim</SubTittle>
      <TextContent>
        Meu nome é alisson e sou apaixonado por tecnologia, atualmente estou cursando Análise e desenvolvimento de sistemas e estudando back end com NodeJS.
      </TextContent>
      <TextContent>
        Desenvolvo soluções em tecnologia, usando as melhores tecnologias do mercado, como o ecossistema ReactJS.
      </TextContent>
      <Button text="Baixe meu cv" href={curriculo} download="curriculo-alisson" />
    </Content>
  );
};

export default AboutMe;