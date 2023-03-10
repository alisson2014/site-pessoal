import { Component } from "./style";
interface IButtonProps {
  text: string
  color?: string
  href?: string
  target?: string
};

const Button = ({
  text,
  color,
  href,
  target
}: IButtonProps) => {

  return (
    <Component color={color}>
      <a href={href} target={target}>
        {text}
      </a>
    </Component>
  );
};


export default Button;