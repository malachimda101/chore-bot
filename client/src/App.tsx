import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="test" element={<div>Test</div>} />
      <Route path="about" element={<div>About</div>} />
    </Routes>
  );
};

export default App;
