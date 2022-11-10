import { logout } from '../services/google.firebase.login';

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button className="cursor-pointer" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
