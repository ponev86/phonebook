import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import styles from './HeaderView.module.scss';
import Button from '../Button';
import { ButtonType } from '../Button/types';
import Icon from '../Icon';
import { IContact } from '../../store/contact/types';

interface IHeaderViewProps {
  contactItem?: IContact;
}

const HeaderView: React.FC<IHeaderViewProps> = ({ contactItem }) => {
  const history = useHistory();

  const onBackHandler = () => {
    history.push('/');
  };

  const onEditHandler = () => {
    history.push(`/edit/${contactItem?.id}`);
  };

  return (
    <header className={styles.headerView}>
      <div className={classNames('container', styles.headerView__inner)}>
        <Button
          buttonType={ButtonType.UNFILLED}
          className={styles.headerView__backLink}
          onClick={onBackHandler}
        >
          <Icon name="back" />
        </Button>

        <div className={styles.headerView__wrapper}>
          {contactItem?.avatar ? (
            <img
              className={styles.headerView__avatar}
              src={contactItem.avatar}
              alt={`${contactItem.name} ${contactItem.surname}`}
            />
          ) : (
            <div className={styles.headerView__noPhoto}>
              {contactItem?.name[0]}
              {contactItem?.surname?.[0]}
            </div>
          )}
          <h2 className={styles.headerView__username}>
            {contactItem?.name} {contactItem?.surname}
          </h2>
        </div>

        <Button
          buttonType={ButtonType.UNFILLED}
          className={styles.headerView__editLink}
          onClick={onEditHandler}
        >
          <Icon name="edit" />
        </Button>
      </div>
    </header>
  );
};

export default HeaderView;
