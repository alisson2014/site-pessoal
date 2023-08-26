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

import { SiBootstrap, SiTypescript } from "react-icons/si";

interface Card {
  title: string;
  textContent: string;
  children: React.ElementType; 
}

export const cards: Card[] = [
    {
    "title": "PHP",
    "textContent": "É uma linguagem de programação de código aberto amplamente utilizada para o desenvolvimento de aplicações web dinâmicas.",
    "children": DiPhp
  },
  {
    "title": "MySQL",
    "textContent": "O MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto (RDBMS).",
    "children": DiMysql
  },
  {
    "title": "HTML5",
    "textContent": "Linguaguem de marcação de hyperlinks, usado para criar a estrutura do site, desde metadados até textos e botões.",
    "children": DiHtml5
  },
  {
    "title": "CSS3",
    "textContent": "Folha de estilo em cascata, usado na estilização do site, desde mudar uma fonte até animações avançadas.",
    "children": DiCss3
  },
  {
    "title": "JavaScript",
    "textContent": "Linguagem de progamação, usado para deixar o site inteligente com informações dinâmicas.",
    "children": DiJavascript
  },
  {
    "title": "Git",
    "textContent": "Sistema de controle de versão distribuído, usado em times e facillita o trabalho offline ou remoto.",
    "children": DiGit
  },
  {
    "title": "Github",
    "textContent": "É um serviço baseado em nuvem que hospeda os repositórios Git.",
    "children": DiGithubBadge
  },
  {
    "title": "React",
    "textContent": "É uma biblioteca Javascript, usada na construção de sites que buscam escalabilidade e performance.",
    "children": DiReact
  },
  {
    "title": "Typescript",
    "textContent": "É um superset de JavaScript, permite atribuir tipos a aplicação tornando-a mais rápida e segura.",
    "children": SiTypescript
  },
  {
    "title": "Bootstrap",
    "textContent": "É um framework CSS, permite criar aplicações responsivas por padrão.",
    "children": SiBootstrap
  }
];