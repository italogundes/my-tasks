import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AreaTasks from './Components/Tasks/AreaTasks';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AreaTasks />
                </ProtectedRoute>
              }
            />
            <Route path="login/*" element={<Login />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
