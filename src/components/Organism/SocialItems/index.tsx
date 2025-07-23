import React from "react";
import SocialList from "../../Molecules/SocialList";
import { SocialItemsContainer } from "./style";

const SocialItems: React.FC = () => {
  return (
    <SocialItemsContainer>
      <SocialList />
    </SocialItemsContainer>
  );
};

export default SocialItems;