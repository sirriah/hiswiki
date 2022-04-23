import { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  getListOfAllArticlesByAlphabet,
  getListOfAllArticlesByDate,
  getListOfLastArticles,
} from '../firebase/api/articles';

const FirebaseFirst = () => {
  const [articleList, setArticleList] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [alphabeticalListOfArticles, setAlphabeticalListOfArticles] = useState(
    [],
  );

  useEffect(() => {
    getListOfAllArticlesByDate().then((value) => setArticleList(value));
  }, []);

  useEffect(() => {
    getListOfLastArticles().then((value) => setLatestArticles(value));
  }, []);

  useEffect(() => {
    getListOfAllArticlesByAlphabet().then((value) =>
      setAlphabeticalListOfArticles(value),
    );
  }, []);

  return (
    <div>
      <div>
        <h2 className="headline--1 mb-4">Vsechny clanky</h2>
        {articleList.map(({ id, link, title, dateOfPublication }) => (
          <div className="m-5" key={id}>
            <Link href={`/article/${link}`}>
              <a className="text-blue-600 underline">
                <h2>{title}</h2>
              </a>
            </Link>
            <p>Publikováno dne: {dateOfPublication}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="headline--1 mb-4">Nejnovejsi 3 clanky</h2>
        {latestArticles.map(({ id, link, title }) => (
          <div className="m-5" key={id}>
            <Link href={`/article/${link}`}>
              <a className="text-blue-600 underline">
                <h2>{title}</h2>
              </a>
            </Link>
            <p>Publikováno dne: </p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="headline--1 mb-4">Abecední seznam</h2>
        {Object.entries(alphabeticalListOfArticles).map(
          ([groupLetter, articles]) => (
            <div className="m-5" key={groupLetter}>
              <h3 className="headline--4">{groupLetter}</h3>
              {articles.map(({ title, link, id }) => (
                <li className="my-2" key={id}>
                  <Link href={`/article/${link}`}>
                    <a className="block text-blue-600 underline">
                      <h2>{title}</h2>
                    </a>
                  </Link>
                </li>
              ))}
            </div>
          ),
        )}
      </div>
    </div>
  );
};
export default FirebaseFirst;
