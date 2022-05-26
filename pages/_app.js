import '../styles/globals.css';
import Head from 'next/head';

import { AuthProvider } from '../contexts/AuthContext';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Hiswiki - encyklopedie obce Loděnice</title>
    </Head>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </>
);

export default MyApp;
