import Button from "../../Atoms/Button";
import { SubTittle } from "../../Atoms/Tittles";
import { Content, TextContent } from "./atoms";

const AboutMe = () => {
  return (
    <Content>
      <SubTittle>Sobre mim</SubTittle>
      <TextContent>
        Meu nome é alisson e sou apaixonado por tecnologia, atualmente estou cursando Análise e desenvolvimento de sistemas e estudando back end NodeJS.
      </TextContent>
      <TextContent>
        Desenvolvo soluções em tecnologia, usando as melhores tecnologias do mercado, como o ecossistema ReactJS.
      </TextContent>
      <Button text="Baixe meu cv" />
    </Content>
  );
};

export default AboutMe;