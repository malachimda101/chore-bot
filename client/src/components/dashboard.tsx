import { User } from 'firebase/auth';
import { collection, DocumentData, getDocs, query, QuerySnapshot, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { database, fetch_user_data } from '../services/database';
import { auth, logout } from '../services/google.firebase.login';

const Dashboard = () => {
  const [user, loading, error]: [User | null | undefined, boolean, Error | undefined] =
    useAuthState(auth);

  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const fetch_user = async () => {
      if (user) {
        const q = query(collection(database, 'users'), where('uid', '==', user.uid));
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUserData(doc.data());
        });
      }
    };
    fetch_user();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button className="cursor-pointer" onClick={logout}>
        Log Out
      </button>
      <div>{userData && userData.name}</div>
    </div>
  );
};

export default Dashboard;
