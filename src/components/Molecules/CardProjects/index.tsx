import { ThirdTittle } from "../../Atoms/StyledTexts";
import { PContainer, TextContainer } from "./style";

interface IBoxProjects {
  tittle: string
  text: string
  children: any
}

const CardProjects = ({ tittle, text, children }: IBoxProjects) => (
  <PContainer>
    <ThirdTittle>{tittle}</ThirdTittle>
    <TextContainer>{text}</TextContainer>
    {children}
  </PContainer>
);

export default CardProjects;