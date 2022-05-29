import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { editArticle, getArticleDetail } from '../../../firebase/api/articles';
import { ArticleForm } from '../../../components/ArticleForm';
import { Layout } from '../../../components/Layout';
import { Loader } from '../../../components/Loader';
import { PrivateRouter } from '../../../components/PrivateRouter';

const EditArticle = () => {
  const router = useRouter();
  const { articleLink } = router.query;

  const [article, setArticle] = useState();

  useEffect(() => {
    const handleFetching = async () => {
      setArticle(await getArticleDetail(articleLink));
    };

    if (articleLink) {
      handleFetching();
    }
  }, [articleLink]);

  if (!article) {
    return <Loader />;
  }

  const {
    id,
    title,
    alphabeticalTitle,
    content,
    featuredImage,
    altForFeaturedImage,
    keywords,
    portals,
    link,
    details,
  } = article;

  return (
    <PrivateRouter>
      <Layout>
        <h1 className="headline--1 underline-large">Editace článku</h1>
        <ArticleForm
          title={title}
          alphabeticalTitle={alphabeticalTitle}
          content={decodeURIComponent(content)}
          id={id}
          articleCallback={editArticle}
          featuredImage={decodeURIComponent(featuredImage)}
          altForFeaturedImage={decodeURIComponent(altForFeaturedImage)}
          keywords={keywords}
          portals={portals}
          link={link}
          details={details}
        />
      </Layout>
    </PrivateRouter>
  );
};

export default EditArticle;
