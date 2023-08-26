import * as Atoms from "./atoms";

const Logo = () => {
  return (
    <Atoms.Logo>
      <Atoms.Icon>&lt;/&gt;</Atoms.Icon>
      <Atoms.Tittle>
        <div className="t-1">Full-Stack</div>
        <div className="t-2">Developer</div>
      </Atoms.Tittle>
    </Atoms.Logo>
  );
};

export default Logo;