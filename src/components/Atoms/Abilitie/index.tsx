import { useState } from "react";
import { ThirdTittle } from "../Tittles";
import * as Atoms from "./atoms";

interface IAbilitieCard {
  tittle: string
  textContent: string
  children: any
}

type FlipState = "" | "flip";

const AbilitieCard = ({
  tittle, children, textContent
}: IAbilitieCard) => {
  const [flipState, setFlipState] = useState<FlipState>("")

  const handleOnClick = () => {
    if (flipState === "") {
      setFlipState("flip")
    } else {
      setFlipState("")
    }
  }

  return (
    <Atoms.Card className={flipState} onClick={handleOnClick}>
      {
        flipState === "" ? (
          <Atoms.Face className="front">
            <ThirdTittle>{tittle}</ThirdTittle>
            <Atoms.Img>{children}</Atoms.Img>
          </Atoms.Face>
        ) : (
          <Atoms.Face className="back">
            <Atoms.TextContent>
              {textContent}
            </Atoms.TextContent>
          </Atoms.Face>
        )
      }
    </Atoms.Card>
  )
}

export default AbilitieCard;