import { useState } from 'react';

export const FormInput = ({
  defaultValue,
  onChange,
  labelClassName,
  label,
  required,
  value,
  ...props
}) => {
  const [userInput, setUserInput] = useState(defaultValue);

  const inputHandler = (e) => {
    if (onChange) {
      onChange(e);
    } else {
      setUserInput(e.target.value);
    }
  };

  return (
    <>
      {label && (
        <label className={labelClassName} htmlFor={props.id}>
          {required ? `${label} *` : label}
        </label>
      )}
      <input
        {...props}
        required={required}
        onChange={inputHandler}
        value={value === undefined ? userInput : value}
      />
    </>
  );
};
