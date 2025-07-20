import { AbilitieBox } from "components";
import { SubTittle, ThirdTittle } from "components/Atoms/StyledTexts";
import { AbilitiesConatiner } from "./style";

const Abilities = () => {
  return (
    <AbilitiesConatiner>
      <SubTittle>Habilidades</SubTittle>
      {/* <ThirdTittle>
        Clique no card para ver a descrição
      </ThirdTittle> */}
      <AbilitieBox />
    </AbilitiesConatiner>
  );
};

export default Abilities;