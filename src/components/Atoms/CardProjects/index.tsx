import ModalButton from "../../Molecules/ModalButton";
import { TextContent, ThirdTittle } from "../StyledTexts";
import { PContainer } from "./style";

interface IBoxProjects {
  tittle: string
  text: string
}

const CardProjects = ({ tittle, text }: IBoxProjects) => {
  return (
    <PContainer>
      <ThirdTittle>{tittle}</ThirdTittle>
      <TextContent>{text}</TextContent>
      <ModalButton />
    </PContainer>
  )
}

export default CardProjects;