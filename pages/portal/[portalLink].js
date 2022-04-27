import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '../../components/Layout';

const Portal = () => {
  const router = useRouter();
  const [nameRouter, setNameRouter] = useState();

  useEffect(() => {
    if (router.isReady) {
      const { portalLink } = router.query;
      setNameRouter(portalLink);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Layout>{nameRouter}</Layout>;
};
export default Portal;
