import React from "react";
import SocialItem from "../../Atoms/SocialItem";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { List } from "./style";
import list from "./list.json";

const SocialList: React.FC = () => {
  return (
    <List>
      <SocialItem {...list[0]} children={<FaLinkedinIn />} />
      <SocialItem {...list[1]} children={<FaGithub />} />
      <SocialItem {...list[2]} children={<MdEmail />} />
    </List>
  );
};

export default SocialList;