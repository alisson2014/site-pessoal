import React, { useState } from "react";
import { TextContent, ThirdTittle } from "../../Atoms/StyledTexts";
import * as Atoms from "./atoms";

interface IAbilitieCard {
  title: string
  textContent: string
  children: React.ReactNode
}

type FlipState = "" | "flip";

const AbilitieCard: React.FC<IAbilitieCard> = ({
  title, children, textContent
}) => {
  const [flipState, setFlipState] = useState<FlipState>("");

  const handleOnClick = (): void => {
    setFlipState(prev => prev === "" ? "flip" : "");
  };

  return (
    <Atoms.Card className={flipState} onClick={handleOnClick}>
      {flipState === "" ? (
        <Atoms.Face className="front">
          <ThirdTittle>{title}</ThirdTittle>
          <Atoms.Img>{children}</Atoms.Img>
        </Atoms.Face>
      ) : (
        <Atoms.Face className="back">
          <TextContent>
            {textContent}
          </TextContent>
        </Atoms.Face>
      )}
    </Atoms.Card>
  )
}

export default AbilitieCard;