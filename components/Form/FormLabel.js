export const FormLabel = ({
  labelClassName,
  id,
  required,
  labelName,
  isValid,
}) => (
  <label className={labelClassName} htmlFor={id}>
    {required ? `${labelName} *` : labelName}
    {!isValid && (
      <span className="ml-3 text-red-600">Obsahuje nepovolené znaky</span>
    )}
  </label>
);
