import * as Atoms from "./atoms"
import { Link } from "react-router-dom"

interface ILinkTo {
  route: string
  section: string
}

const LinkTo = ({ route, section }: ILinkTo) => {
  return (
    <Atoms.LinkLi>
      <Link to={route}>{section}</Link>
    </Atoms.LinkLi>
  )
}

export default LinkTo