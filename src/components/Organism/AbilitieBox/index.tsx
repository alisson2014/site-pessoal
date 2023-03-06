
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
import AbilitieCard from "../../Molecules/AbilitieCard";
import { ContainerAb } from "./style";

const AbilitieBox = () => {
  return (
    <ContainerAb>
      <AbilitieCard
        tittle="HTML5"
        children={<DiHtml5 />}
        textContent="
        Linguaguem de marcação de hyperlinks, usado para criar a estrutura do site, desde metadados até textos e botões. 
      "
      />
      <AbilitieCard
        tittle="CSS3"
        children={<DiCss3 />}
        textContent="
        Folha de estilo em cascata, usado na estilização do site, desde mudar uma fonte até animações avançadas.
      "
      />
      <AbilitieCard
        tittle="JavaScript"
        children={<DiJavascript />}
        textContent="
        Linguagem de progamação, usado para deixar o site inteligente com informações dinâmicas.
      "
      />
      <AbilitieCard
        tittle="Git"
        children={<DiGit />}
        textContent="
        Sistema de controle de versão distribuído, usado em times e facillita o trabalho offline ou remoto. 
      "
      />
      <AbilitieCard
        tittle="Github"
        children={<DiGithubBadge />}
        textContent="
         É um serviço baseado em nuvem que hospeda os repositórios Git.
      "
      />
      <AbilitieCard
        tittle="React"
        children={<DiReact />}
        textContent="
        É uma biblioteca Javascript, usada na construção de sites que buscam escalabilidade e performance.
      "
      />
      <AbilitieCard
        tittle="Typescript"
        children={<SiTypescript />}
        textContent="
        É um superset de JavaScript, permite atribuir tipos a aplicação tornando-a mais rápida e segura
      "
      />
      <AbilitieCard
        tittle="Bootstrap"
        children={<FaBootstrap />}
        textContent="
        É um framework CSS, permite criar aplicações responsivas por padrão.
      "
      />
      <AbilitieCard
        tittle="S. components"
        children={<SiStyledcomponents />}
        textContent="
        É uma biblioteca CSS in JS, permite estilizar os componentes no próprio JavaScript.
      "
      />
      <AbilitieCard
        tittle="Jest"
        children={<SiJest />}
        textContent="
        É uma ferramenta usada na realização de testes unitários, permitindo avaliar erros antes de subir a aplicação.  
      "
      />
    </ContainerAb>
  );
};

export default AbilitieBox;