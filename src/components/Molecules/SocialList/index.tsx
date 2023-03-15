import SocialItem from "../../Atoms/SocialItem";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { List } from "./style";

const SocialList = () => {
  return (
    <List>
      <SocialItem href="https://www.linkedin.com/in/alisson-vm-2014-alm/" target="_blank">
        <FaLinkedinIn />
      </SocialItem>
      <SocialItem href="https://github.com/alisson2014" target="_blank">
        <FaGithub />
      </SocialItem>
      <SocialItem href="mailto:almeidaalisson2014@gmail.com?subject=Olá, vamos conversar sobre (digite aqui)">
        <MdEmail />
      </SocialItem>
    </List>
  );
};

export default SocialList;