import { Component } from "./style";
interface IButtonProps {
  text: string
  color?: string
  href?: string
  target?: string
  download?: string
};

const Button = ({
  text,
  color,
  href,
  download,
  target
}: IButtonProps) => {

  return (
    <Component color={color}>
      <a href={href} target={target} download={download}>
        {text}
      </a>
    </Component>
  );
};


export default Button;