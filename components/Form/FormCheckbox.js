import { useState } from 'react';

export const FormCheckbox = ({
  defaultChecked,
  onChange,
  labelClassName,
  label,
  required,
  checked,
  ...props
}) => {
  const [isChecked, setChecked] = useState(defaultChecked);

  const inputHandler = () => {
    if (onChange) {
      onChange(!checked);
    } else {
      setChecked(!isChecked);
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
        required={required}
        type="checkbox"
        onChange={inputHandler}
        checked={checked === undefined ? isChecked : checked}
        {...props}
      />
    </>
  );
};
