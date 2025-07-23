import { useAboutJson } from "context/AboutJsonContext/useAboutJson";
import Button from "../../Atoms/Button";
import { Tittle } from "../../Atoms/StyledTexts";
import * as Atoms from "./atoms";

const ContentMe: React.FC = () => {
  const { position, linkedin } = useAboutJson();

  return (
    <Atoms.Content>
      <Atoms.MeTittle>
        Olá, eu sou o
        <Tittle>Alisson Vinícius</Tittle>
        {position}
      </Atoms.MeTittle>
      <Button
        href={linkedin}
        text="Linkedin"
        target="blank"
      />
    </Atoms.Content>
  );
};

export default ContentMe