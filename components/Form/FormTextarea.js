import { useState } from 'react';
import classNames from 'classnames';

import { FormLabel } from './FormLabel.tsx';

const regex = /^[a-zA-Zá-žÁ-Ž0-9 .,]+$/;

export const FormTextarea = ({
  defaultValue,
  onChange,
  labelClassName,
  label,
  required,
  pattern,
  className,
  ...props
}) => {
  const [userInput, setUserInput] = useState(defaultValue);
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
      <textarea
        required={required}
        onChange={handleInputChange}
        value={userInput}
        className={classNames(
          {
            'outline outline-2 outline-red-600': !isValid,
          },
          { [className]: className },
        )}
        {...props}
      />
    </>
  );
};
