import '../styles/globals.css';
import { AuthProvider } from '../contexts/AuthContext';

const MyApp = ({ Component, pageProps }) => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
);

export default MyApp;
