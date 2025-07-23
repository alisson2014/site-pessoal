import AbilitieCard from "../../Molecules/AbilitieCard";
import { ContainerAb } from "./style";
import { cards } from "./cards";
import React from "react";

const AbilitieBox: React.FC = () => {
  return (
    <ContainerAb>
      {cards.map((card, index) => (
        <AbilitieCard
          key={index} 
          title={card.title}
          textContent={card.textContent}
          children={<card.children />}
        />
      ))}
    </ContainerAb>
  );
};

export default AbilitieBox;