import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Layout } from '../../components/Layout';
import { getArticlesOfKeywords } from '../../firebase/api/keywords';

const Keyword = () => {
  const router = useRouter();
  const { keywordLink } = router.query;

  const [keyword, setKeyword] = useState([]);

  useEffect(() => {
    const handleFetching = async () => {
      setKeyword(await getArticlesOfKeywords(keywordLink));
    };

    if (keywordLink) {
      handleFetching();
    }
  }, [keywordLink]);

  return (
    <Layout>
      <div>
        <h2 className="headline--1 mb-4">Klíčové slovo: {keywordLink}</h2>
        {Object.entries(keyword).map(([groupLetter, articles]) => (
          <div className="m-5" key={groupLetter}>
            <h3 className="headline--4">{groupLetter}</h3>
            <ul className="list-disc">
              {articles.map(({ title, link, id }) => (
                <li className="my-2 " key={id}>
                  <Link href={`/article/${link}`}>
                    <a className="inline-block text-accent-500 underline hover:no-underline">
                      <h2>{title}</h2>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Keyword;
