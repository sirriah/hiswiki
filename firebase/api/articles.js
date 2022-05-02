import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  setDoc,
  doc,
} from 'firebase/firestore';

import {
  transformSnapshot,
  groupByFirstChar,
  createSlugLink,
  parseKeywords,
  transformFirstCharToUpperCase,
} from '../../utils/transformData';
import { firebase } from '../../firebase/initFirebase';

export const getArticleDetail = async (articleLink) => {
  const articlesCollectionRef = collection(firebase, 'articles');
  const q = query(articlesCollectionRef, where('link', '==', articleLink));
  const dataArticle = await getDocs(q);
  const transformedData = transformSnapshot(dataArticle);

  return transformedData;
};

export const getListOfAllArticlesByDate = async () => {
  const articlesCollectionRef = collection(firebase, 'articles');
  const q = query(articlesCollectionRef, orderBy('dateOfPublication', 'desc'));
  const dataArticle = await getDocs(q);

  return transformSnapshot(dataArticle);
};

export const getListOfLastArticles = async () => {
  const articlesCollectionRef = collection(firebase, 'articles');
  const q = query(
    articlesCollectionRef,
    orderBy('dateOfPublication', 'desc'),
    limit(3),
  );
  const dataArticle = await getDocs(q);

  return transformSnapshot(dataArticle);
};

export const getListOfAllArticlesByAlphabet = async () => {
  const articlesCollectionRef = collection(firebase, 'articles');
  const q = query(articlesCollectionRef, orderBy('alphabeticalTitle'));
  const dataArticle = await getDocs(q);

  const plainArticleData = transformSnapshot(dataArticle);

  const groupedArticleData = groupByFirstChar(
    plainArticleData,
    'alphabeticalTitle',
  );

  return groupedArticleData;
};

export const addNewArticle = async (articleObj) => {
  const title = transformFirstCharToUpperCase(articleObj.title);
  const alphabeticalTitle = transformFirstCharToUpperCase(
    articleObj.alphabeticalTitle,
  );
  const articlesCollectionRef = collection(firebase, 'articles');
  const payload = {
    title: title || '',
    content: articleObj.content || '',
    alphabeticalTitle: alphabeticalTitle || articleObj.title,
    featuredImage: articleObj.featuredImage || '',
    link: createSlugLink(articleObj.title || ''),
    dateOfPublication: new Date(),
    altForFeaturedImage: articleObj.altForFeaturedImage || '',
    keywords: parseKeywords(articleObj.keywords) || '',
    portals: articleObj.portals || '',
  };
  await addDoc(articlesCollectionRef, payload);
};

export const editArticle = async (articleObj) => {
  const alphabeticalTitle = articleObj.alphabeticalTitle || articleObj.title;
  const docRef = doc(firebase, 'articles', articleObj.id);
  const payload = {
    title: articleObj.title,
    content: articleObj.content,
    featuredImage: articleObj.featuredImage,
    alphabeticalTitle,
    altForFeaturedImage: articleObj.altForFeaturedImage,
    keywords: parseKeywords(articleObj.keywords),
    portals: articleObj.portals,
  };
  await setDoc(docRef, payload, { merge: true });
};
