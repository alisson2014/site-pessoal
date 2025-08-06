import React from "react";
import Button from "../../Atoms/Button";
import { SubTittle } from "../../Atoms/StyledTexts";
import { Content, TextContent } from "./style";
import { useAboutJson } from "context/AboutJsonContext/useAboutJson";

const AboutMe: React.FC = () => {
  const { about } = useAboutJson();
  
  return (
    <Content>
      <SubTittle>Sobre mim</SubTittle>
      <TextContent>{about}</TextContent>
      <Button
        text="Baixe meu cv"
        href="https://drive.google.com/uc?export=download&id=1bKOw0zQEGpQUbxMZSi8zO8mbHs9POUFI"
        download="curriculo-alisson-dev.pdf"
      />
    </Content>
  );
};

export default AboutMe;