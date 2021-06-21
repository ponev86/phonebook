import React from 'react';
import useWindowScrolled from '../../helpers/hooks/useWindowScrolled';
import ContactItem from '../ContactItem';
import styles from './ContactList.module.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store/interfaces';
import { useEffect } from 'react';
import { getContacts } from '../../store/contact/actions';
import { IContact } from '../../store/contact/types';
import Loader from '../Loader';
import { sortingAlpha } from '../../helpers/functions';

const ContactList: React.FC = () => {
  const isScrolled = useWindowScrolled();
  const dispatch = useDispatch();
  const { contacts, isLoading } = useSelector(
    (state: IState) => state.contactReducer
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const sortingContacts = sortingAlpha(contacts);

  return (
    <main>
      <div
        className={classNames(
          styles.contactList,
          isScrolled && styles.contactList_scrolled
        )}
      >
        {isLoading && (
          <div className={styles.contactList__empty}>
            <Loader />
          </div>
        )}

        {!sortingContacts.length && !isLoading && (
          <div className={styles.contactList__empty}>
            <h3>Не найдено</h3>
          </div>
        )}

        {sortingContacts.length && !isLoading ? (
          <div className={classNames('container', styles.contactList__inner)}>
            {sortingContacts.map((itemContact: IContact) => {
              return (
                <ContactItem
                  key={itemContact.id}
                  id={itemContact.id}
                  name={itemContact.name}
                  surname={itemContact.surname}
                  phone={itemContact.phone}
                  avatar={itemContact.avatar}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default ContactList;
