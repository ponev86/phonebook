import React from 'react';
import classNames from 'classnames';
import styles from './ContactView.module.scss';
import { IContact } from '../../store/contact/types';
import Loader from '../Loader';

interface IHeaderViewProps {
  contactItem?: IContact;
  isLoading: boolean;
}

const ContactView: React.FC<IHeaderViewProps> = ({
  contactItem,
  isLoading
}) => {
  return (
    <main>
      <div className={styles.contactView}>
        {isLoading ? (
          <div className={styles.contactView__loader}>
            <Loader />
          </div>
        ) : (
          <div className={classNames('container', styles.contactView__inner)}>
            <div className={styles.contactView__dataWrapper}>
              <div className={styles.contactView__title}>Телефон:</div>
              <div className={styles.contactView__value}>
                {contactItem?.phone}
              </div>
            </div>
            <div className={styles.contactView__dataWrapper}>
              <div className={styles.contactView__title}>Email:</div>
              <div className={styles.contactView__value}>
                {contactItem?.email}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ContactView;
