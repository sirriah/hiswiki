import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { editArticle, getArticleDetail } from '../../../firebase/api/articles';
import { ArticleInputs } from '../ArticleInputs';

const EditArticle = () => {
  const router = useRouter();
  const { articleLink } = router.query;

  const [article, setArticle] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      const articleDetail = getArticleDetail(articleLink);
      articleDetail.then((value) => setArticle(value));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addEditArticleHandler = (articleObj) => {
    editArticle(articleObj);
  };

  return (
    <div>
      <h1 className="headline--1">Editace clanku</h1>
      {article.map(({ id, title, alphabeticalTitle, content }) => (
        <ArticleInputs
          titleProp={title}
          alphabeticalTitleProp={alphabeticalTitle}
          contentProp={content}
          idProp={id}
          onEditArticle={addEditArticleHandler}
        />
      ))}
    </div>
  );
};

export default EditArticle;
