import { NavigateFunction, useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../services/google.firebase.login';

const Login = () => {
  const navigate: NavigateFunction = useNavigate();

  const signIn = async () => {
    await signInWithGoogle();
    navigate('/');
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button className="w-60 h-12 bg-figOrange rounded-2xl text-white shadow-md" onClick={signIn}>
        Login or signup with Google
      </button>
    </div>
  );
};
export default Login;
