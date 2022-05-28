import { getDoc, setDoc, doc } from 'firebase/firestore';

import { firebase } from '../../firebase/initFirebase';

export const getUserDetail = async (userID) => {
  const userRef = doc(firebase, 'users', userID);
  const userData = await getDoc(userRef);

  return userData.data();
};

export const addNewUser = async (userData) => {
  const payload = {
    username: userData.email,
  };

  const docRef = doc(firebase, 'users', userData.id);
  await setDoc(docRef, payload, { merge: true });
};

export const editUserProfile = async (formData) => {
  const payload = {
    name: formData.name,
    surname: formData.surname,
    bio: formData.bio,
    profilePic: formData.profilePic,
  };

  const docRef = doc(firebase, 'users', formData.uid);
  await setDoc(docRef, payload, { merge: true });
};
