import Button from "../../Atoms/Button";
import { Tittle } from "../../Atoms/StyledTexts";
import * as Atoms from "./atoms";

const ContentMe = () => {
  return (
    <Atoms.Content>
      <Atoms.MeTittle>
        Olá, eu sou o
        <Tittle>Alisson Vinícius</Tittle>
        Desenvolvedor web
      </Atoms.MeTittle>
      <Button href="https://www.linkedin.com/in/alisson-vinicius-morais-de-almeida-027553252/" text="Linkedin" />
    </Atoms.Content>
  );
};

export default ContentMe;