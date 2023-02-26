import * as Atoms from "./atoms";
import LinkTo from "../../Atoms/LinkTo";

const Nav = () => {
  return (
    <Atoms.Nav>
      <Atoms.List>
        <LinkTo route="/home" section="Home" />
        <LinkTo route="/about" section="Sobre" />
        <LinkTo route="/projects" section="Projetos" />
        <LinkTo route="/abilities" section="Habilidades" />
      </Atoms.List>
    </Atoms.Nav>
  );
};

export default Nav;