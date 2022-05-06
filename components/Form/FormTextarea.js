import { useState } from 'react';
import classNames from 'classnames';

const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|<>/?~]/;

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
      <textarea
        required={required}
        onChange={inputHandler}
        value={userInput}
        className={`${classNames({
          'outline outline-2 outline-red-600': !isValid,
        })} ${className}`}
        {...props}
      />
    </>
  );
};
