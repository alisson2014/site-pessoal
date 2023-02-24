import * as Atoms from "./atoms";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiGit,
  DiGithubBadge,
  DiReact
} from "react-icons/di";

import { SiTypescript, SiStyledcomponents, SiJest, SiSass } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa"
import { AbilitieCard } from "../../components";

const Abilities = () => {
  return (
    <Atoms.Container>
      <Atoms.Tittle>Habilidades</Atoms.Tittle>
      <Atoms.ContainerAb>
        <AbilitieCard tittle="HTML5" children={<DiHtml5 />} />
        <AbilitieCard tittle="CSS3" children={<DiCss3 />} />
        <AbilitieCard tittle="JavaScript" children={<DiJavascript />} />
        <AbilitieCard tittle="Git" children={<DiGit />} />
        <AbilitieCard tittle="Github" children={<DiGithubBadge />} />
        <AbilitieCard tittle="React" children={<DiReact />} />
        <AbilitieCard tittle="TypeScript" children={<SiTypescript />} />
        <AbilitieCard tittle="Bootstrap" children={<FaBootstrap />}
        />
        <AbilitieCard tittle="Styled components" children={<SiStyledcomponents />} />
        <AbilitieCard tittle="Jest" children={<SiJest />} />
      </Atoms.ContainerAb>
      <div>Baixe meu curriculo</div>
    </Atoms.Container>
  );
};

export default Abilities;