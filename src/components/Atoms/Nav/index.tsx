import * as Atoms from "./atoms"

const Nav = () => {
  return (
    <Atoms.Nav>
      <Atoms.List>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
        <li>
          <a href="/projects">Projetos</a>
        </li>
        <li>
          <a href="/abilities">Habilidades</a>
        </li>
      </Atoms.List>
    </Atoms.Nav>
  )
}

export default Nav