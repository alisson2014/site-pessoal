import { Link } from "react-router-dom";
import { LinkLi } from "./style";

interface ILinkTo {
  route: string
  section: string
};

const LinkTo = ({ route, section }: ILinkTo) => {
  return (
    <LinkLi>
      <Link to={route}>{section}</Link>
    </LinkLi>
  );
};

export default LinkTo;