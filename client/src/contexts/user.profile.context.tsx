import { User } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/google.firebase.login';

interface UserProfile {
  authProvider: string;
  email: string;
  name: string;
  registered: boolean;
  uid: string;
}

export interface UserProfileContextType {
  userProfile: UserProfile | null;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

interface Props {
  children: React.ReactNode;
}

const UserProfileContext = React.createContext<UserProfileContextType | null>(null);

const UserProfileProvider: React.FC<Props> = ({ children }) => {
  const [userProfile, setUserProfile] = React.useState<UserProfile | null>(null);
  const [user, loading, error]: [User | null | undefined, boolean, Error | undefined] =
    useAuthState(auth);

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileContext, UserProfileProvider };
