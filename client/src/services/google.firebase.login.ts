import { firebase_app } from './firebase.config';
import { database } from './database';

import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, Auth } from 'firebase/auth';
import { query, getDocs, collection, where, addDoc } from 'firebase/firestore';

const auth: Auth = getAuth(firebase_app);

const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
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
        email: user.email,
        registered: false
      });
    }
  } catch (err: any) {
    console.error(err);
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, signInWithGoogle, logout };
