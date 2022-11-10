import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import { ReactComponent as OrangeBg } from './assets/OrangeBg.svg';
import { ReactComponent as BlueBg } from './assets/BlueBg.svg';
import { auth, logout } from './services/google.firebase.login';
import Dashboard from './components/dashboard';
import { useAuthState } from 'react-firebase-hooks/auth';

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
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
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
      </>
    );
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
        <Route path="about" element={<div>About</div>} />
        <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
