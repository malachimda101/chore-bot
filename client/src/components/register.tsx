import { NavigateFunction, useNavigate } from 'react-router-dom';
import { logout } from '../services/google.firebase.login';

const Register = () => {
  const navigate: NavigateFunction = useNavigate();
  const signOutReturnHome = async () => {
    await logout();
    navigate('/');
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <p>Register</p>
      <button className="cursor-pointer" onClick={signOutReturnHome}>
        Log Out
      </button>
    </div>
  );
};

export default Register;
