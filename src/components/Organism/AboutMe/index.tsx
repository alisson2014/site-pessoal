import Button from "../../Atoms/Button";
import { SubTittle } from "../../Atoms/StyledTexts";
import { Content, TextContent } from "./style";

const AboutMe = () => {
  return (
    <Content>
      <SubTittle>Sobre mim</SubTittle>
      <TextContent>
        Meu nome é alisson e sou apaixonado por tecnologia, atualmente curso análise e desenvolvimento de sistemas e sempre se aprofundando no mundo web com PHP/React.
      </TextContent>
      <TextContent>
        Atuo como estágiario em desenvolvimento web, realizando a componentização e modularização de um sistema legado PHP.
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