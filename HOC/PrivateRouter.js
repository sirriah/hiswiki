import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from '../contexts/AuthContext';
const PrivateRouter = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const Router = useRouter();

  if (currentUser) {
    return <>{children}</>;
  } else {
    Router.push('/login');

    return <></>;
  }
};

export default PrivateRouter;
