import React from 'react';
import useWindowScrolled from '../../helpers/hooks/useWindowScrolled';
import Search from '../Search';
import Button from '../Button';
import Icon from '../Icon';
import { ButtonType } from '../Button/types';
import classNames from 'classnames';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const isScrolled = useWindowScrolled();

  return (
    <header className={styles.header}>
      <div
        className={classNames(
          'container',
          styles.header__inner,
          isScrolled && styles.header__inner_scrolled
        )}
      >
        <Button
          buttonType={ButtonType.UNFILLED}
          className={styles.header__addLink}
        >
          <Icon name="add" />
        </Button>

        <h2
          className={classNames(
            styles.header__title,
            isScrolled && styles.header__title_scrolled
          )}
        >
          Книга контактов
        </h2>
        <Search />
      </div>
    </header>
  );
};

export default Header;
