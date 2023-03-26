import AbilitieCard from "../../Molecules/AbilitieCard";
import { ContainerAb } from "./style";
import cards from "./cards.json";

//React icons
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

const AbilitieBox = () => {
  return (
    <ContainerAb>
      <AbilitieCard
        {...cards[0]}
        children={<DiHtml5 />}
      />
      <AbilitieCard
        {...cards[1]}
        children={<DiCss3 />}
      />
      <AbilitieCard
        {...cards[2]}
        children={<DiJavascript />} />
      <AbilitieCard
        {...cards[3]}
        children={<DiGit />}
      />
      <AbilitieCard
        {...cards[4]}
        children={<DiGithubBadge />}
      />
      <AbilitieCard
        {...cards[5]}
        children={<DiReact />}
      />
      <AbilitieCard
        {...cards[6]}
        children={<SiTypescript />}
      />
      <AbilitieCard
        {...cards[7]}
        children={<FaBootstrap />}
      />
      <AbilitieCard
        {...cards[8]}
        children={<SiStyledcomponents />}
      />
      <AbilitieCard
        {...cards[9]}
        children={<SiJest />}
      />
    </ContainerAb>
  );
};

export default AbilitieBox;