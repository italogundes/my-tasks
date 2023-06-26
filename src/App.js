import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AreaTasks from './Components/Tasks/AreaTasks';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import './App.css';
import User from './Components/User/User';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AreaTasks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/conta"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
