import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MobileIcon, Nav, NavMenu } from "./style";
import LinkTo from "../../Atoms/LinkTo";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("Home");

  const handleClick = (): void => setIsOpen(prev => !prev);

  useEffect(() => {
    document.title = `Alisson | ${activeSection}`;
  }, [activeSection]);

  return (
    <Nav>
      <MobileIcon onClick={handleClick}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <LinkTo route="home" section="Home" title="Ir para a seção Home" onClick={handleClick} onSetActive={() => setActiveSection("Home")} />
          <LinkTo route="about" section="Sobre" title="Ir para a seção Sobre" onClick={handleClick} onSetActive={() => setActiveSection("Sobre")} />
          <LinkTo route="projects" section="Projetos" title="Ir para a seção Projetos" onClick={handleClick} onSetActive={() => setActiveSection("Projetos")} />
          <LinkTo route="abilities" section="Habilidades" title="Ir para a seção Habilidades" onClick={handleClick} onSetActive={() => setActiveSection("Habilidades")} />
        </NavMenu>
    </Nav>
  );
};

export default NavBar;