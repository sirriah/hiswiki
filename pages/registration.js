import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout } from '../components/Layout';
import { useAuth } from '../contexts/AuthContext';
import { FormInput } from '../components/Form/FormInput';

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      setLoading(true);
      await signup(e.target.email.value, e.target.passwd.value);
      router.push('/');
    } catch (err) {
      if (err.code === 'auth/weak-password') {
        setError('Příliš slabé heslo. Zvolte delší než 6 znaků.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Email není ve správném tvaru');
      } else {
        setError('Při přihlašování se vyskytla chyba.');
      }
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div className="w-full md:mx-auto md:w-96">
        <h1 className="headline--3">Registrace</h1>
        {error && <p className="my-3 bg-red-100 p-3 text-red-800">{error}</p>}
        <div>
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              label="E-mail"
              id="email"
              placeholder="email"
              defaultValue=""
              className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
            />
            <FormInput
              type="password"
              label="Heslo"
              id="passwd"
              placeholder="passwd"
              defaultValue=""
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
