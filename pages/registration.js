import { useRef, useState } from 'react';
import Link from 'next/link';

import { Layout } from '../components/Layout';
// import { FormInput } from '../components/Form/FormInput';
import { useAuth } from '../contexts/AuthContext';

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('chyba pri registraci');
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div className="w-full md:mx-auto md:w-96">
        <h1 className="headline--3">Registrace</h1>
        <div>
          {currentUser?.email}
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
              Zaregistrovat
            </button>
          </form>
          <p>
            Už máte účet?{' '}
            <Link href="/login">
              <a className="link">Přihlaste se</a>
            </Link>{' '}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
