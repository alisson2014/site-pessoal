import { Link } from "react-router-dom";
import { LinkLi } from "./style";

interface ILinkTo {
  route: string
  section: string
  onClick?: () => void
};

const LinkTo = ({ route, section, onClick }: ILinkTo) => {
  return (
    <LinkLi>
      <Link to={route} onClick={onClick}>{section}</Link>
    </LinkLi>
  );
};

export default LinkTo;