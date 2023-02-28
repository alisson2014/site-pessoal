
import { FaBootstrap } from "react-icons/fa";

import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiGit,
  DiGithubBadge,
  DiReact
} from "react-icons/di";

import {
  SiTypescript,
  SiStyledcomponents,
  SiJest,
} from "react-icons/si";
import AbilitieCard from "../../Atoms/Abilitie";
import { ContainerAb } from "./atoms";

const CardBox = () => {
  return (
    <ContainerAb>
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
    </ContainerAb>
  );
};

export default CardBox;