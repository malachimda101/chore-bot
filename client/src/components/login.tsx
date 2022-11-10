import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../services/google.firebase.login';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate('/');
    if (loading) {
      return;
    }
  }, [user, loading]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button
        className="w-60 h-12 bg-figOrange rounded-2xl text-white shadow-md"
        onClick={signInWithGoogle}>
        Login or signup with Google
      </button>
    </div>
  );
};
export default Login;
