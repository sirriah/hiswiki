import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { getArticleDetail } from '../../firebase/api/articles';

const Article = () => {
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
    <div>
      <h1 className="headline--1 mb-4">Detail clanku</h1>
      <Link href="/firebase-outputs">
        <a className="pl-4 text-blue-700 underline">zpet</a>
      </Link>
      {article.map(({ id, title, author, content }) => (
        <article key={id}>
          <h2 className="headline--2">{title}</h2>
          <p className="paragraph">Autor: {author}</p>
          <p className="paragraph">{content}</p>
        </article>
      ))}
    </div>
  );
};

export default Article;
