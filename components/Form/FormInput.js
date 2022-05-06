import classNames from 'classnames';
import { useState } from 'react';

const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

// const regex = /[a-zA-Z0-9 .]+/;

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
  const [userInput, setUserInput] = useState(defaultValue);
  const [isValid, setIsValid] = useState(true);

  const inputHandler = (e) => {
    if (onChange) {
      onChange(e);
    } else {
      pattern && setIsValid(!specialChars.test(e.target.value));
      setUserInput(e.target.value);
    }
  };

  return (
    <>
      {label && (
        <label className={labelClassName} htmlFor={props.id}>
          {required ? `${label} *` : label}
          {!isValid && (
            <span className="ml-3 text-red-600">Obsahuje nepovolené znaky</span>
          )}
        </label>
      )}
      <input
        {...props}
        pattern={pattern}
        required={required}
        onChange={inputHandler}
        value={value === undefined ? userInput : value}
        className={`${classNames({
          'outline outline-2 outline-red-600': !isValid,
        })} ${className}`}
      />
    </>
  );
};
