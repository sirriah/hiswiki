export const FormLabel = ({
  labelClassName,
  elementsId,
  required,
  labelName,
  isValid,
}) => (
  <label className={labelClassName} htmlFor={elementsId}>
    {required ? `${labelName} *` : labelName}
    {!isValid && (
      <span className="ml-3 text-red-600">Obsahuje nepovolené znaky</span>
    )}
  </label>
);
