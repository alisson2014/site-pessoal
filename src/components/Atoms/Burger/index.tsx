import { useState } from "react";
import * as S from "./style"


const Burguer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Burguer onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </S.Burguer>
  );
};

export default Burguer;