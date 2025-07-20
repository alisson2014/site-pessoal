import Button from "../../Atoms/Button";
import { Tittle } from "../../Atoms/StyledTexts";
import * as Atoms from "./atoms";

const ContentMe = () => {
  return (
    <Atoms.Content>
      <Atoms.MeTittle>
        Olá, eu sou o
        <Tittle>Alisson Vinícius</Tittle>
        Analista de Sistemas
      </Atoms.MeTittle>
      <Button
        href="https://www.linkedin.com/in/alisson-vm-2014-alm/" text="Linkedin"
        target="blank"
      />
    </Atoms.Content>
  );
};

export default ContentMe;