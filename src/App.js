import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AreaTasks from './Components/Tasks/AreaTasks';
import Login from './Components/Login/Login';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AreaTasks />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
