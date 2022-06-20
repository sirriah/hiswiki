import classNames from 'classnames';
import React, { FC, useState } from 'react';

import { FormLabel } from './FormLabel.tsx';

const regex = /^[a-zA-Zá-žÁ-Ž0-9 .]+$/;

type Props = {
  type: 'email' | 'number' | 'text' | 'password' | undefined;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClassName?: string;
  label: string;
  required?: boolean;
  value?: any;
  pattern?: string;
  className?: any;
  id: string;
  placeholder: string;
};

export const FormInput: FC<Props> = ({
  defaultValue,
  onChange,
  labelClassName,
  label,
  required,
  value,
  pattern,
  className,
  id,
  placeholder,
  ...props
}) => {
  const [userInput, setUserInput] = useState(defaultValue || '');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    } else {
      if (pattern && e.target.value) {
        setIsValid(regex.test(e.target.value));
      }

      setUserInput(e.target.value);
    }
  };

  return (
    <>
      {label && (
        <FormLabel
          labelClassName={labelClassName}
          htmlFor={id}
          required={required}
          labelName={label}
          isValid={isValid}
        />
      )}
      <input
        {...props}
        id={id}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        onChange={handleInputChange}
        value={value === undefined ? userInput : value}
        className={classNames(
          {
            'outline outline-2 outline-red-600': !isValid,
          },
          { [className]: className },
        )}
      />
    </>
  );
};
