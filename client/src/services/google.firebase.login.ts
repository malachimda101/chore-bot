import { firebase_app } from './firebase.config';
import { database } from './database';

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { query, getDocs, collection, where, addDoc } from 'firebase/firestore';

const auth = getAuth(firebase_app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async (): Promise<void> => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(database, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(database, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email
      });
    }
  } catch (err: any) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, logout };
