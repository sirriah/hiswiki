import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from '../firebase/initFirebase';

export const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const signup = useCallback(
    (email, passwd) => createUserWithEmailAndPassword(auth, email, passwd),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth],
  );

  const login = useCallback(
    (email, passwd) => signInWithEmailAndPassword(auth, email, passwd),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logout = useCallback(() => signOut(auth), [auth]);

  const value = useMemo(
    () => ({
      currentUser,
      signup,
      login,
      logout,
    }),
    [currentUser, signup, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
