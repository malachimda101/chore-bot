import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle
} from '../services/google.firebase.login';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={() => logInWithEmailAndPassword(email, password)}>Login</button>
        <button onClick={signInWithGoogle}>Login with Google</button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
};
export default Login;
