import React, { useState } from 'react';
import Button from '../Button';
import { ButtonType } from '../Button/types';
import Input from '../Input';
import { InputType } from '../Input/types';
import classNames from 'classnames';
import styles from './Search.module.scss';

const Search: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [isHideButton, setIsHideButton] = useState<boolean>(true);

  const onFocusHandler = () => setIsHideButton(false);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setIsHideButton(!event.target.value.length);
  };
  const onClickHandler = () => {
    setValue('');
    setIsHideButton(true);
  };

  return (
    <div className={styles.search}>
      <Input
        inputType={InputType.SEARCH}
        className={styles.search__input}
        placeholder="Введите что-нибудь..."
        onFocus={onFocusHandler}
        value={value}
        onChange={onChangeHandler}
      />
      <Button
        buttonType={ButtonType.UNFILLED}
        className={classNames(
          styles.search__button,
          isHideButton && styles.search__button_hide
        )}
        onClick={onClickHandler}
      >
        Отмена
      </Button>
    </div>
  );
};

export default Search;
