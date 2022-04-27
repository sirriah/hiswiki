import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { getArticleDetail } from '../../../firebase/api/articles';
import { ArticleForm } from '../ArticleForm';
import { Layout } from '../../../components/Layout';

const EditArticle = () => {
  const router = useRouter();
  const { articleLink } = router.query;

  const [article, setArticle] = useState([]);

  useEffect(() => {
    const handleFetching = async () => {
      setArticle(await getArticleDetail(articleLink));
    };

    if (articleLink) {
      handleFetching();
    }
  }, [articleLink]);

  return (
    <Layout>
      <div>
        <h1 className="headline--1 underline-large">Editace článku</h1>
        {article.map(
          ({
            id,
            title,
            alphabeticalTitle,
            content,
            featuredImage,
            altForFeaturedImage,
            keywords,
            portals,
            link,
          }) => (
            <ArticleForm
              key={id}
              titleProp={title}
              alphabeticalTitleProp={alphabeticalTitle}
              contentProp={content}
              idProp={id}
              onEditArticle
              featuredImageProp={featuredImage}
              altForFeaturedImageProp={altForFeaturedImage}
              keywordsProp={keywords}
              portalsProp={portals}
              linkProp={link}
            />
          ),
        )}
      </div>
    </Layout>
  );
};

export default EditArticle;
