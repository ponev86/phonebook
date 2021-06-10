import React from 'react';
import useWindowScrolled from '../../helpers/hooks/useWindowScrolled';
import ContactItem from '../ContactItem';
import styles from './ContactList.module.scss';
import classNames from 'classnames';

const ContactList: React.FC = () => {
  const isScrolled = useWindowScrolled();

  return (
    <main>
      <div
        className={classNames(
          styles.contactList,
          isScrolled && styles.contactList_scrolled
        )}
      >
        {/* <div className={styles.contactList__empty}>
          <h3>Не найдено</h3>
        </div> */}
        <div className={classNames('container', styles.contactList__inner)}>
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
          <ContactItem
            id={1}
            name="Danila"
            surname="Bagrov"
            phone="+7(999) 111-22-33"
          />
          <ContactItem
            id={2}
            name="Данила"
            surname="Багров"
            phone="+7(8090) 333-11-22"
            avatar="danila.jpg"
          />
        </div>
      </div>
    </main>
  );
};

export default ContactList;
