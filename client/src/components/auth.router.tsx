import { useContext } from 'react';
import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom';
import { UserProfileContext, UserProfileContextType } from '../contexts/user.profile.context';

const AuthRouter = () => {
  const { userProfile } = useContext(UserProfileContext) as UserProfileContextType;
  if (userProfile && !userProfile.registered) {
    return <Navigate to="/register" />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};

export default AuthRouter;
