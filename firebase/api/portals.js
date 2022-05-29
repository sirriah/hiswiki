import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

import { transformSnapshot } from '../../utils/transformData';
import { firebase } from '../../firebase/initFirebase';

export const getListOfAllArticlesWithPortal = async (portalName) => {
  const articlesCollectionRef = collection(firebase, 'articles');
  const q = query(
    articlesCollectionRef,
    where('portals', 'array-contains', portalName),
    orderBy('dateOfPublication', 'desc'),
  );
  const dataArticle = await getDocs(q);

  return transformSnapshot(dataArticle);
};
