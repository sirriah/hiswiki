import React, { FC } from 'react';

import { FormInput } from '../Form/FormInput.tsx';
import { Button } from '../Form/Button.tsx';

type Props = {
  buttonText: string;
  actionCallback: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
};

export const AuthForm: FC<Props> = ({
  actionCallback,
  loading,
  buttonText,
}) => (
  <form onSubmit={actionCallback}>
    <FormInput
      type="email"
      label="E-mail"
      id="email"
      placeholder="E-mail"
      defaultValue=""
      className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
    />
    <FormInput
      type="password"
      label="Heslo"
      id="passwd"
      placeholder="Heslo"
      defaultValue=""
      className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
    />

    <Button loading={loading} type="submit">
      {buttonText}
    </Button>
  </form>
);
