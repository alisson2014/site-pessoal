import Button from "../../Atoms/Button";
import { SubTittle } from "../../Atoms/StyledTexts";
import { Content, TextContent } from "./style";

const AboutMe = () => {
  return (
    <Content>
      <SubTittle>Sobre mim</SubTittle>
      <TextContent>
        Meu nome é Alisson e sou apaixonado por tecnologia, atualmente sou estudante de Análise de Sistemas e estou sempre buscando novos conhecimentos no mundo da programação e tecnologia em geral.
      </TextContent>
      <TextContent>
        Atuo como Desenvolvedor FullStack, realizando a componentização e modularização de um sistema legado utilizando as stacks PHP, ReactJS e Docker.
      </TextContent>
      <Button
        text="Baixe meu cv"
        href="/assets/curriculo.pdf"
        download="curriculo-alisson"
      />
    </Content>
  );
};

export default AboutMe;