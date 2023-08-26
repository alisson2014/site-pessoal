import AbilitieCard from "../../Molecules/AbilitieCard";
import { ContainerAb } from "./style";
import { cards } from "./cards";

const AbilitieBox = () => {
  return (
    <ContainerAb>
      {cards.map((card) => {
        return <AbilitieCard
          title={card.title}
          textContent={card.textContent}
          children={<card.children />}
        />;
      })}
    </ContainerAb>
  );
};

export default AbilitieBox;