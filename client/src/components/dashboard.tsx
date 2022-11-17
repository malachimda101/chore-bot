import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom';
import { fetchUserData } from '../services/database';
import { auth, logout } from '../services/google.firebase.login';

interface UserProfile {
  authProvider: string;
  email: string;
  name: string;
  registered: boolean;
  uid: string;
}

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [user, loading, error]: [User | null | undefined, boolean, Error | undefined] =
    useAuthState(auth);
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      await fetchUserData(user?.uid || '', setUserProfile);
    };
    fetchUserProfile();
  }, []);

  const signOutReturnHome = async () => {
    await logout();
    navigate('/');
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  } else if (!userProfile.registered) {
    return <Navigate to="/register" />;
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button className="cursor-pointer" onClick={signOutReturnHome}>
        Log Out
      </button>
      <div>Dashboard</div>
    </div>
  );
};

export default Dashboard;
