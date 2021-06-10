import React from 'react';
import { ButtonType } from './types';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  buttonType: ButtonType;
  isSubmit?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  buttonType,
  children,
  onClick,
  className,
  disabled,
  isSubmit
}) => {
  const buttonStyle = {
    [ButtonType.PRIMARY]: styles.button_primary,
    [ButtonType.UNFILLED]: styles.button_unfilled
  };

  return (
    <button
      className={classNames(styles.button, buttonStyle[buttonType], className)}
      disabled={disabled}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
