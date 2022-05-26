import { FormInput } from '../Form/FormInput';
import { Button } from '../Form/Button';

export const AuthForm = ({ actionCallback, loading, buttonText }) => (
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

    <Button disabled={loading} type="submit">
      {buttonText}
    </Button>
  </form>
);
