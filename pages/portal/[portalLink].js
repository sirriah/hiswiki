import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '../../components/Layout';
import { Loader } from '../../components/Loader';
import { FeaturedArticle } from '../../components/home/FeaturedArticle';
import { getListOfAllArticlesWithPortal } from '../../firebase/api/portals';
import { ArticleExcerpt } from '../../components/ArticleExcerpt';

const Portal = () => {
  const router = useRouter();

  const [listOfArticlesWithPortal, setListOfArticlesWithPortal] = useState([]);

  useEffect(() => {
    const fetchArticlesWithPortal = async () => {
      setListOfArticlesWithPortal(
        await getListOfAllArticlesWithPortal(router.query.portalLink),
      );
    };

    if (router.query.portalLink) {
      fetchArticlesWithPortal();
    }
  }, [router.query.portalLink]);

  if (!router.query.portalLink) {
    return <Loader />;
  }

  return (
    <Layout>
      <div className="mx-auto w-[1088px]">
        <h1 className="headline--1 underline-large">
          Portál: {router.query.portalLink}
        </h1>
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
