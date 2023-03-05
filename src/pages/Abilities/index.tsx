import { CardBox } from "../../components";
import { SubTittle } from "../../components/Atoms/StyledTexts";
import { AbilitiesConatiner } from "./atoms";

const Abilities = () => {
  return (
    <AbilitiesConatiner>
      <SubTittle>Habilidades</SubTittle>
      <CardBox />
    </AbilitiesConatiner>
  );
};

export default Abilities;