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

const database: Firestore = getFirestore(firebase_app);

const fetch_user_data = async (user_id: string) => {
  const q = query(collection(database, 'users'), where('uid', '==', user_id));
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log('test', ' => ', doc.data());
    return doc.data();
  });
};

export { database, fetch_user_data };
