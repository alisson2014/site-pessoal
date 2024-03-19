import Button from "../../Atoms/Button";
import { SubTittle } from "../../Atoms/StyledTexts";
import { Content, TextContent } from "./style";

const AboutMe = () => {
  return (
    <Content>
      <SubTittle>Sobre mim</SubTittle>
      <TextContent>
        Meu nome é alisson e sou apaixonado por tecnologia, atualmente curso análise de sistemas e sempre buscando novos conhecimentos no mundo da programação.
      </TextContent>
      <TextContent>
        Atuo analista de sistemas, realizando a componentização e modularização de um sistema legado PHP.
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