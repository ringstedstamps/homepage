import './App.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  // Remove 'useLocation' if not needed right now
  // const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;