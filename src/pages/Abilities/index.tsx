import { AbilitieBox } from "../../components";
import { SubTittle } from "../../components/Atoms/StyledTexts";
import { AbilitiesConatiner } from "./atoms";

const Abilities = () => {
  return (
    <AbilitiesConatiner>
      <SubTittle>Habilidades</SubTittle>
      <AbilitieBox />
    </AbilitiesConatiner>
  );
};

export default Abilities;