import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout } from '../components/Layout';
import { useAuth } from '../contexts/AuthContext';
import { AuthTitle } from '../components/auth/AuthTitle';
import { AuthForm } from '../components/auth/AuthForm';
import { addNewUser } from '../firebase/api/users';

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
      const newUser = await signup(e.target.email.value, e.target.passwd.value);
      addNewUser({ id: newUser.user.uid, email: e.target.email.value });
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
      <div className="w-full pb-44 md:mx-auto md:w-96">
        <AuthTitle error={error}>Registrace</AuthTitle>
        {error && <p className="my-3 bg-red-100 p-3 text-red-800">{error}</p>}
        <div>
          <AuthForm
            loading={loading}
            actionCallback={handleSubmit}
            buttonText="Zaregistrovat"
          />
          <p>
            Už máte účet?{' '}
            <Link href="/login">
              <a className="link">Přihlaste se</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
