import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './ContactView.module.scss';
import Input from '../Input';
import { InputType } from '../Input/types';
import { IContact } from '../../store/contact/types';
import { useEffect } from 'react';

interface IHeaderViewProps {
  contactItem?: IContact;
}

const ContactView: React.FC<IHeaderViewProps> = ({ contactItem }) => {
  const [phone, setPhone] = useState(contactItem?.phone);
  const [email, setEmail] = useState(contactItem?.email);

  useEffect(() => {
    setPhone(contactItem?.phone);
    setEmail(contactItem?.email);
  }, [contactItem]);

  const onChangePhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <main>
      <div className={styles.contactView}>
        <div className={classNames('container', styles.contactView__inner)}>
          <div className={styles.contactView__field}>
            <Input
              inputType={InputType.INPUT}
              disabled={true}
              label="Телефон:"
              value={phone}
              onChange={onChangePhoneHandler}
            />
          </div>
          <div className={styles.contactView__field}>
            <Input
              inputType={InputType.INPUT}
              disabled={true}
              label="Email:"
              value={email}
              onChange={onChangeEmailHandler}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactView;
