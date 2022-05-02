import { useState } from 'react';

export const FormTextarea = ({
  defaultValue,
  onChange,
  labelClassName,
  label,
  required,
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
      <textarea
        required={required}
        onChange={inputHandler}
        value={userInput}
        {...props}
      />
    </>
  );
};
