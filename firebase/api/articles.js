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
  const q = query(
    articlesCollectionRef,
    where('link', '==', encodeURIComponent(articleLink)),
  );
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
    content: encodeURIComponent(formData.content) || '',
    alphabeticalTitle: alphabeticalTitle || formData.title,
    featuredImage: encodeURIComponent(formData.featuredImage) || '',
    link: encodeURIComponent(createSlugLink(formData.title)) || '',
    dateOfPublication: new Date(),
    altForFeaturedImage: encodeURIComponent(formData.altForFeaturedImage) || '',
    keywords: parseKeywords(formData.keywords) || '',
    portals: formData.portals || '',
    details: formData.details || '',
    author: formData.author,
  };

  const articlesCollectionRef = collection(firebase, 'articles');
  await addDoc(articlesCollectionRef, payload);
};

export const editArticle = async (formData) => {
  const alphabeticalTitle = formData.alphabeticalTitle || formData.title;

  const payload = {
    title: formData.title,
    content: encodeURIComponent(formData.content),
    featuredImage: encodeURIComponent(formData.featuredImage),
    alphabeticalTitle,
    altForFeaturedImage: encodeURIComponent(formData.altForFeaturedImage),
    keywords: parseKeywords(formData.keywords),
    portals: formData.portals,
    details: formData.details,
  };

  const docRef = doc(firebase, 'articles', formData.id);
  await setDoc(docRef, payload, { merge: true });
};

export const getAllArticlesFromUser = async (userID) => {
  const articlesCollectionRef = collection(firebase, 'articles');
  const q = query(articlesCollectionRef, where('author', '==', userID));
  const dataArticle = await getDocs(q);

  const plainArticleData = transformSnapshot(dataArticle);

  return plainArticleData;
};
