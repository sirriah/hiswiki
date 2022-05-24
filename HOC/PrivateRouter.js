import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from '../contexts/AuthContext';
import { Loader } from '../components/Loader';

export const PrivateRouter = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (currentUser === null) {
      router.push('/login');
    }
  }, [currentUser, router]);

  const initialLoad = currentUser === undefined;

  if (initialLoad) {
    return <Loader />;
  }

  if (currentUser) {
    return <>{children}</>;
  }

  return null;
};
