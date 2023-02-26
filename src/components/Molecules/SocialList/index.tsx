import * as Atoms from "./atoms";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import SocialItem from "../../Atoms/SocialItem";

const SocialList = () => {
  return (
    <Atoms.SocialList>
      <SocialItem href="https://www.linkedin.com/in/alisson-vinicius-morais-de-almeida-027553252" target="_blank">
        <FaLinkedinIn />
      </SocialItem>
      <SocialItem href="https://github.com/alisson2014" target="_blank">
        <FaGithub />
      </SocialItem>
      <SocialItem href="mailto:almeidaalisson2014@gmail.com?subject=Olá, vamos conversar sobre...">
        <MdEmail />
      </SocialItem>
    </Atoms.SocialList>
  );
};

export default SocialList;