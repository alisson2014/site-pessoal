import * as Atoms from "./atoms"

interface IButton {
  href: string
  target?: string
  text: string
}

const Button = ({ href, target, text }: IButton) => {
  return (
    <Atoms.Button>
      <a href={href} target={target}>
        {text}
      </a>
    </Atoms.Button>
  )
}

export default Button