import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { editArticle, getArticleDetail } from '../../../firebase/api/articles';
import { ArticleForm } from '../../../components/ArticleForm';
import { Layout } from '../../../components/Layout';

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
    return (
      <div className="w-100 h-100 flex content-center items-center">
        loading...
      </div>
    );
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
  } = article;

  return (
    <Layout>
      <h1 className="headline--1 underline-large">Editace článku</h1>
      <ArticleForm
        titleProp={title}
        alphabeticalTitleProp={alphabeticalTitle}
        contentProp={content}
        idProp={id}
        articleCallback={editArticle}
        featuredImageProp={featuredImage}
        altForFeaturedImageProp={altForFeaturedImage}
        keywordsProp={keywords}
        portalsProp={portals}
        linkProp={link}
      />
    </Layout>
  );
};

export default EditArticle;
