import { firebase_app } from './firebase.config';
import {
  collection,
  DocumentData,
  Firestore,
  getDocs,
  getFirestore,
  query,
  QuerySnapshot,
  where
} from 'firebase/firestore';
import React from 'react';

const database: Firestore = getFirestore(firebase_app);

const fetchUserData = async (
  user_id: string,
  setUserState: React.Dispatch<React.SetStateAction<any>>
) => {
  const q = query(collection(database, 'users'), where('uid', '==', user_id));
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
  querySnapshot.forEach((doc) => {
    setUserState(doc.data());
  });
};

export { database, fetchUserData };
