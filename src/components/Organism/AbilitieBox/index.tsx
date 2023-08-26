import AbilitieCard from "../../Molecules/AbilitieCard";
import { ContainerAb } from "./style";
import cards from "./cards.json";

import { FaBootstrap } from "react-icons/fa";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiGit,
  DiGithubBadge,
  DiReact,
  DiPhp,
  DiMysql
} from "react-icons/di";

import { SiTypescript } from "react-icons/si";

const AbilitieBox = () => {
  return (
    <ContainerAb>
      <AbilitieCard
        {...cards[0]}
        children={<DiPhp />}
      />
      <AbilitieCard
        {...cards[1]}
        children={<DiMysql />}
      />
      <AbilitieCard
        {...cards[2]}
        children={<DiHtml5 />}
      />
      <AbilitieCard
        {...cards[3]}
        children={<DiCss3 />}
      />
      <AbilitieCard
        {...cards[4]}
        children={<DiJavascript />} />
      <AbilitieCard
        {...cards[5]}
        children={<DiGit />}
      />
      <AbilitieCard
        {...cards[6]}
        children={<DiGithubBadge />}
      />
      <AbilitieCard
        {...cards[7]}
        children={<DiReact />}
      />
      <AbilitieCard
        {...cards[8]}
        children={<SiTypescript />}
      />
      <AbilitieCard
        {...cards[9]}
        children={<FaBootstrap />}
      />
    </ContainerAb>
  );
};

export default AbilitieBox;