import { firebase_app } from './firebase.config';
import { getFirestore } from 'firebase/firestore';

const database = getFirestore(firebase_app);

export { database };
