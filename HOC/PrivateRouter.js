import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from '../contexts/AuthContext';

export const PrivateRouter = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  if (currentUser) {
    return <>{children}</>;
  } else {
    router.push('/login');

    return <></>;
  }
};
