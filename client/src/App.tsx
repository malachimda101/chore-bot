import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import { ReactComponent as OrangeBg } from './assets/OrangeBg.svg';
import { ReactComponent as BlueBg } from './assets/BlueBg.svg';
import Dashboard from './components/dashboard';
import Register from './components/register';
import { User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './services/google.firebase.login';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Sepetember',
  'October',
  'November',
  'December'
];

const App = () => {
  const d: Date = new Date();
  const [user, loading, error]: [User | null | undefined, boolean, Error | undefined] =
    useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <OrangeBg className="fixed right-0 -z-50" />
      <BlueBg className="fixed left-0 top-12 -z-50" />
      <div className="flex justify-around items-center w-screen h-24 fixed text-figDarkBlue text-center">
        <p className="text-3xl w-1/3">{daysOfWeek[d.getDay()]}</p>
        <p className="text-6xl w-1/3">Chore Bot</p>
        <p className="text-3xl w-1/3">
          {months[d.getMonth()]} {d.getDate()}
        </p>
      </div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
