import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import { logout } from './services/google.firebase.login';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="cursor-pointer" onClick={() => logout()}>
            Home
          </div>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<div>About</div>} />
    </Routes>
  );
};

export default App;
