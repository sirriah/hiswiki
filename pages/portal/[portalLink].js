import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '../../components/Layout';
import { Loader } from '../../components/Loader';
import { FeaturedArticle } from '../../components/home/FeaturedArticle';
import { getListOfAllArticlesWithPortal } from '../../firebase/api/portals';
import { ArticleExcerpt } from '../../components/ArticleExcerpt';

const Portal = () => {
  const router = useRouter();

  const [nameRouter, setNameRouter] = useState();
  const [listOfArticlesWithPortal, setListOfArticlesWithPortal] = useState([]);

  useEffect(() => {
    const { portalLink } = router.query;
    setNameRouter(portalLink);
  }, [router]);

  useEffect(() => {
    const fetchArticlesWithPortal = async () => {
      setListOfArticlesWithPortal(
        await getListOfAllArticlesWithPortal(nameRouter),
      );
    };

    if (nameRouter) {
      fetchArticlesWithPortal();
    }
  }, [nameRouter]);

  if (!nameRouter) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="mx-auto w-[1088px]">
        <h1 className="headline--1 underline-large">Portál: {nameRouter}</h1>
        {listOfArticlesWithPortal
          .slice(0, 1)
          .map(
            ({
              id,
              title,
              content,
              link,
              featuredImage,
              dateOfPublication,
            }) => (
              <FeaturedArticle
                key={id}
                title={title}
                content={decodeURIComponent(content)}
                link={decodeURIComponent(link)}
                featuredImage={decodeURIComponent(featuredImage)}
                dateOfPublication={dateOfPublication}
              />
            ),
          )}
        <div className="flex flex-col items-center">
          {listOfArticlesWithPortal
            .slice(1)
            .map(
              ({
                id,
                title,
                content,
                link,
                featuredImage,
                dateOfPublication,
              }) => (
                <ArticleExcerpt
                  key={id}
                  title={title}
                  content={decodeURIComponent(content)}
                  link={decodeURIComponent(link)}
                  featuredImage={decodeURIComponent(featuredImage)}
                  dateOfPublication={dateOfPublication}
                />
              ),
            )}
        </div>
      </div>
    </Layout>
  );
};
export default Portal;
