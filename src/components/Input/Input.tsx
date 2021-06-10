import React from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';
import { InputType } from './types';

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  inputType: InputType;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean | null;
}

const Input: React.FC<IInputProps> = ({
  inputType,
  id,
  name,
  className,
  value,
  label,
  isRequired,
  placeholder,
  onChange,
  isValid,
  ...rest
}) => {
  const inputStyle = {
    [InputType.SEARCH]: styles.input_search
  };

  const classInput = classNames(
    styles.input,
    inputStyle[inputType],
    className,
    isValid !== null && (isValid ? styles.input_valid : styles.input_invalid)
  );

  return (
    <>
      {label && (
        <label htmlFor={id} className={styles.inputWrapper__label}>
          {label}
          {isRequired && (
            <span className={styles.inputWrapper__required}>*</span>
          )}
        </label>
      )}

      <input
        id={id}
        name={name}
        className={classInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};

export default Input;
