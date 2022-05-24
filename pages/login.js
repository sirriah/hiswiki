import { useRef, useState } from 'react';
import Link from 'next/link';

import { Layout } from '../components/Layout';
// import { FormInput } from '../components/Form/FormInput';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser, logout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('chyba pri prihlasovani');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      alert('Chyba pri odhlaseni');
    }
  };

  return (
    <Layout>
      <div className="w-full md:mx-auto md:w-96">
        <h1 className="headline--3">Přihlášení</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              label="E-mail"
              id="email"
              placeholder="email"
              defaultValue=""
              ref={emailRef}
              className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
            />
            <input
              type="password"
              label="Heslo"
              id="passwd"
              placeholder="passwd"
              defaultValue=""
              ref={passwordRef}
              className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
            />

            <button
              disabled={loading}
              type="submit"
              className="my-4 w-full rounded-md border-b-4 border-b-accent-600 bg-accent-500 px-10 py-3 text-white transition-colors hover:border-accent-500 hover:bg-accent-600 disabled:opacity-30 disabled:hover:border-b-accent-600 disabled:hover:bg-accent-500"
            >
              Přihlásit se
            </button>

            <button
              type="button"
              onClick={handleLogout}
              disabled={!currentUser}
              className="my-4 w-full rounded-md border-b-4 border-b-accent-600 bg-accent-500 px-10 py-3 text-white transition-colors hover:border-accent-500 hover:bg-accent-600 disabled:opacity-30 disabled:hover:border-b-accent-600 disabled:hover:bg-accent-500"
            >
              Odhlásit se
            </button>
          </form>
          <p>
            Nemáte zřízený účet?{' '}
            <Link href="/registration">
              <a className="link">Registrujte se</a>
            </Link>{' '}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
