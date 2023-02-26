import { ThirdTittle } from "../Tittles";
import * as Atoms from "./atoms";

interface IAbilitieCard {
  tittle: string
  children: any
}

const AbilitieCard = ({ tittle, children }: IAbilitieCard) => {
  return (
    <Atoms.Card>
      <ThirdTittle>{tittle}</ThirdTittle>
      <Atoms.Img>{children}</Atoms.Img>
    </Atoms.Card>
  )
}

export default AbilitieCard;