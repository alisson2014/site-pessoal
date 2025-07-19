import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MobileIcon, Nav, NavMenu } from "./style";
import LinkTo from "../../Atoms/LinkTo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = (): void => setIsOpen(prev => !prev);

  return (
    <Nav>
      <MobileIcon onClick={handleClick}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <LinkTo route="/home" section="Home" title="Ir para a seção Home" onClick={handleClick} />
          <LinkTo route="/about" section="Sobre" title="Ir para a seção Sobre" onClick={handleClick} />
          <LinkTo route="/projects" section="Projetos" title="Ir para a seção Projetos" onClick={handleClick} />
          <LinkTo route="/abilities" section="Habilidades" title="Ir para a seção Habilidades" onClick={handleClick} />
        </NavMenu>
    </Nav>
  );
};

export default NavBar;