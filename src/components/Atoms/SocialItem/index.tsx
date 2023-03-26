import React from "react";
import { LiItem } from "./style";

interface ISocialItem {
  href: string
  target?: string
  children: React.ReactElement
};

const SocialItem = ({
  href, target = "blank", children
}: ISocialItem) => {
  return (
    <LiItem>
      <a href={href} target={target}>
        {children}
      </a>
    </LiItem>
  );
};

export default SocialItem;