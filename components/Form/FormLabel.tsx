import { FC } from 'react';

type Props = {
  labelClassName: string | undefined;
  htmlFor: string;
  labelName: string;
  isValid: boolean;
  required?: boolean;
};

export const FormLabel: FC<Props> = ({
  labelClassName,
  htmlFor,
  required,
  labelName,
  isValid,
}) => (
  <label className={labelClassName} htmlFor={htmlFor}>
    {required ? `${labelName} *` : labelName}
    {!isValid && (
      <span className="ml-3 text-red-600">Obsahuje nepovolené znaky</span>
    )}
  </label>
);
