import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactItem.module.scss';
import { Paths } from '../../router/constants';

interface IContactItemProps {
  id: number;
  name: string;
  surname?: string;
  phone: string;
  avatar?: string;
}

const ContactItem: React.FC<IContactItemProps> = ({
  id,
  name,
  surname,
  phone,
  avatar
}) => {
  return (
    <Link to={`${Paths.view}/${id}`} className={styles.contactItem}>
      {avatar ? (
        <img
          className={styles.contactItem__avatar}
          src={avatar}
          alt={`${name} ${surname}`}
        />
      ) : (
        <span className={styles.contactItem__noPhoto}>
          {name[0]}
          {surname?.[0]}
        </span>
      )}
      <span className={styles.contactItem__dataWrapper}>
        <span className={styles.contactItem__name}>
          {name} {surname}
        </span>
        <span className={styles.contactItem__phone}>{phone}</span>
      </span>
    </Link>
  );
};

export default ContactItem;
