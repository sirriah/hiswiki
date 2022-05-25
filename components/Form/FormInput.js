import classNames from 'classnames';
import { useState } from 'react';

import { FormLabel } from './FormLabel';

const regex = /^[a-zA-Zá-žÁ-Ž0-9 .]+$/;

export const FormInput = ({
  defaultValue,
  onChange,
  labelClassName,
  label,
  required,
  value,
  pattern,
  className,
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
          id={props.id}
          required={required}
          labelName={label}
          isValid={isValid}
        />
      )}
      <input
        {...props}
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
