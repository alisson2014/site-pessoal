import { Link } from 'react-scroll'; 
import { LinkLi } from "./style";

interface ILinkTo {
  route: string
  title: string;
  section: string
  onClick?: () => void
};

const LinkTo = ({ route, section, onClick, title }: ILinkTo) => {
  return (
    <LinkLi>
      <Link to={route} title={title} onClick={onClick} offset={-70} duration={500} spy smooth>{section}</Link>
    </LinkLi>
  );
};

export default LinkTo;