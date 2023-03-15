import { AbImg } from "./style";

const AboutImg = () => {
  return (
    <AbImg>
      <figure>
        <figcaption>
          <a href="https://br.freepik.com/vetores-gratis/visualizacao-da-pagina-da-web-procedimento-de-protocolo-fluxo-de-trabalho-de-software-dinamico-desenvolvimento-full-stack-marcacao-administrar-sistema-driver-para-memoria-compartilhada-ilustracao-em-vetor-conceito-metafora-isolado_12470220.htm#query=integracao%20de%20sistemas&position=8&from_view=keyword&track=ais">
            Imagem de vectorjuice no Freepik
          </a>
        </figcaption>
        <img src={require("./tech.avif")} alt="image" />
      </figure>

    </AbImg>
  );
};

export default AboutImg;