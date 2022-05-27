import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout } from '../components/Layout';
import { useAuth } from '../contexts/AuthContext';
import { AuthTitle } from '../components/auth/AuthTitle';
import { AuthForm } from '../components/auth/AuthForm';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(e.target.email.value, e.target.passwd.value);
      router.push('/');
    } catch (err) {
      if (
        err.code === 'auth/wrong-password' ||
        err.code === 'auth/user-not-found'
      ) {
        setError('Neplatné uživatelské jméno nebo heslo.');
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
        <AuthTitle error={error}>Přihlásit se</AuthTitle>
        <div>
          <AuthForm
            loading={loading}
            actionCallback={handleSubmit}
            buttonText="Přihlásit se"
          />
          <p>
            Nemáte zřízený účet?{' '}
            <Link href="/registration">
              <a className="link">Registrujte se</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
