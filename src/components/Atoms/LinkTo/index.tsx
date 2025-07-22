import { Link } from 'react-scroll'; 
import { LinkLi } from "./style";
import styles from './styles.module.css';

interface ILinkTo {
  route: string
  title: string;
  section: string;
  onClick?: () => void;
  onSetActive?: (section: string) => void;
};

const LinkTo = ({ route, section, onClick, title, onSetActive }: ILinkTo) => {
  return (
    <LinkLi>
      <Link 
        activeClass={styles.active} 
        to={route} 
        title={title} 
        onClick={onClick} 
        offset={-70} 
        duration={500} 
        spy 
        smooth
        onSetActive={onSetActive}
      >
        {section}
      </Link>
    </LinkLi>
  );
};

export default LinkTo;