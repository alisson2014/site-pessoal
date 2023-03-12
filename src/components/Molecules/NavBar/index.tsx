import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MobileIcon, Nav, NavMenu } from "./style";
import LinkTo from "../../Atoms/LinkTo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <MobileIcon onClick={handleClick}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <LinkTo route="/home" section="Home"
            onClick={handleClick} />
          <LinkTo route="/about" section="Sobre"
            onClick={handleClick} />
          <LinkTo route="/projects" section="Projetos"
            onClick={handleClick} />
          <LinkTo route="/abilities" section="Habilidades"
            onClick={handleClick} />
        </NavMenu>
    </Nav>
  );
};

export default NavBar;