import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '../../components/Layout';

const Portal = () => {
  const router = useRouter();

  const [nameRouter, setNameRouter] = useState();

  useEffect(() => {
    const { portalLink } = router.query;
    setNameRouter(portalLink);
  }, [router]);

  return (
    <Layout>
      <h1 className="headline--1 underline-large">{nameRouter}</h1>
    </Layout>
  );
};
export default Portal;
