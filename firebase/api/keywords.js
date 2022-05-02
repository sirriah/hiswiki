import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

import { firebase } from '../initFirebase';
import { transformSnapshot, groupByFirstChar } from '../../utils/transformData';

export const getArticlesOfKeywords = async (keyword) => {
  const articlesCollectionRef = collection(firebase, 'articles');
  const q = query(
    articlesCollectionRef,
    orderBy('alphabeticalTitle'),
    where('keywords', 'array-contains', keyword),
  );
  const dataArticle = await getDocs(q);

  const plainArticleData = transformSnapshot(dataArticle);

  const groupedArticleData = groupByFirstChar(
    plainArticleData,
    'alphabeticalTitle',
  );

  return groupedArticleData;
};
