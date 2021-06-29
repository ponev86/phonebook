import React from 'react';
import useWindowScrolled from '../../helpers/hooks/useWindowScrolled';
import ContactItem from '../ContactItem';
import styles from './ContactList.module.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store/interfaces';
import { useEffect } from 'react';
import { filterContacts, sortingAlpha } from '../../helpers/functions';
import { getContacts } from '../../store/contact/actions';
import { IContact } from '../../store/contact/types';
import Loader from '../Loader';

const ContactList: React.FC = () => {
  const isScrolled = useWindowScrolled();
  const dispatch = useDispatch();
  const { contacts, isLoading } = useSelector(
    (state: IState) => state.contactReducer
  );
  const { searchString } = useSelector((state: IState) => state.searchReducer);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contactList = sortingAlpha(filterContacts(contacts, searchString));

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

        {!contactList.length && !isLoading && (
          <div className={styles.contactList__empty}>
            <h3>Не найдено</h3>
          </div>
        )}

        {contactList.length && !isLoading ? (
          <div className={classNames('container', styles.contactList__inner)}>
            {contactList.map((itemContact: IContact) => {
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
