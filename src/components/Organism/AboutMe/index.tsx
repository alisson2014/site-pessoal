import Button from "../../Atoms/Button";
import { SubTittle } from "../../Atoms/StyledTexts";
import { Content, TextContent } from "./style";

const url = "https://gist.githubusercontent.com/alisson2014/1edbcd76bd234bc1fa1b4900bf2252eb/raw/feeec97c2dd9923c25e103dc4d4c515f6bc9fd70/json";

const AboutMe = ({ about }: { about: string }) => {
  return (
    <Content>
      <SubTittle>Sobre mim</SubTittle>
      <TextContent>{about}</TextContent>
      <Button
        text="Baixe meu cv"
        href="https://drive.google.com/uc?export=download&id=1wSFFijux-xwwfXlcjynkMWEiM15H1sz8"
        download="curriculo-alisson-dev.pdf"
      />
    </Content>
  );
};

export default AboutMe;