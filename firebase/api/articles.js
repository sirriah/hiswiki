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

import { transformSnapshot, groupByFirstChar } from '../transformData';
import { firebase } from '../../firebase/initFirebase';

export const getArticleDetail = async (articleLink) => {
  const articlesCollectionRef = collection(firebase, 'articles');
  const q = query(articlesCollectionRef, where('link', '==', articleLink));
  const dataArticle = await getDocs(q);

  return transformSnapshot(dataArticle);
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
  const articlesCollectionRef = collection(firebase, 'articles');
  const payload = { title: articleObj.title, content: articleObj.content };
  await addDoc(articlesCollectionRef, payload);
};

export const editArticle = async (articleObj) => {
  const docRef = doc(firebase, 'articles', articleObj.id);
  const payload = {
    title: articleObj.title,
    content: articleObj.content,
    alphabetical: articleObj.alphabetical,
  };
  await setDoc(docRef, payload);
};
