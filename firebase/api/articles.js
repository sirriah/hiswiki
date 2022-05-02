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
  const [transformedData] = transformSnapshot(dataArticle);

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

export const addNewArticle = async (formData) => {
  const title = transformFirstCharToUpperCase(formData.title);
  const alphabeticalTitle = transformFirstCharToUpperCase(
    formData.alphabeticalTitle,
  );

  const payload = {
    title: title || '',
    content: formData.content || '',
    alphabeticalTitle: alphabeticalTitle || formData.title,
    featuredImage: formData.featuredImage || '',
    link: createSlugLink(formData.title || ''),
    dateOfPublication: new Date(),
    altForFeaturedImage: formData.altForFeaturedImage || '',
    keywords: parseKeywords(formData.keywords) || '',
    portals: formData.portals || '',
  };

  const articlesCollectionRef = collection(firebase, 'articles');
  await addDoc(articlesCollectionRef, payload);
};

export const editArticle = async (formData) => {
  const alphabeticalTitle = formData.alphabeticalTitle || formData.title;

  const payload = {
    title: formData.title,
    content: formData.content,
    featuredImage: formData.featuredImage,
    alphabeticalTitle,
    altForFeaturedImage: formData.altForFeaturedImage,
    keywords: parseKeywords(formData.keywords),
    portals: formData.portals,
  };

  const docRef = doc(firebase, 'articles', formData.id);
  await setDoc(docRef, payload, { merge: true });
};
