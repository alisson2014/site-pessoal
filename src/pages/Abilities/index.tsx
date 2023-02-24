import * as Atoms from "./atoms";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiGit,
  DiGithubBadge,
  DiReact,
  DiSass
} from "react-icons/di";

import { SiTypescript, SiStyledcomponents, SiJest, SiSass } from "react-icons/si"

const Abilities = () => {
  return (
    <Atoms.Container>
      <Atoms.Tittle>Habilidades</Atoms.Tittle>
      <Atoms.ContainerAb>
        <Atoms.ContentAb>
          <h3>HTML5</h3>
          <DiHtml5 />
        </Atoms.ContentAb>
        <Atoms.ContentAb>
          <h3>CSS3</h3>
          <DiCss3 />
        </Atoms.ContentAb>
        <Atoms.ContentAb>
          <h3>JavaScript</h3>
          <DiJavascript />
        </Atoms.ContentAb>
        <Atoms.ContentAb>
          <h3>Git</h3>
          <DiGit />
        </Atoms.ContentAb>
        <Atoms.ContentAb>
          <h3>Github</h3>
          <DiGithubBadge />
        </Atoms.ContentAb>
        <Atoms.ContentAb>
          <h3>React</h3>
          <DiReact />
        </Atoms.ContentAb>
        <Atoms.ContentAb>
          <h3>TypeScript</h3>
          <SiTypescript />
        </Atoms.ContentAb>
        <Atoms.ContentAb>
          <h3>Styled Components</h3>
          <SiStyledcomponents />
        </Atoms.ContentAb>
        <Atoms.ContentAb>
          <h3>Sass</h3>
          <SiSass />
        </Atoms.ContentAb>
        <Atoms.ContentAb>
          <h3>Jest</h3>
          <SiJest />
        </Atoms.ContentAb>
      </Atoms.ContainerAb>
      <div>Baixe meu curriculo</div>
    </Atoms.Container>
  );
};

export default Abilities;