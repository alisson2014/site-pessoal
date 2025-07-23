import { Link } from 'react-scroll'; 
import { LinkLi } from "./style";
import styles from './styles.module.css';
import React from 'react';
import { ILinkTo } from './types';

const LinkTo: React.FC<ILinkTo> = ({ route, section, onClick, title, onSetActive }) => {
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