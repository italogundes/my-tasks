import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext(); //O UserContext será importado em cada componente que se quer utilizar as propriedades passadas no value do Provider

export const UserStorage = ({ children }) => {
  //Coloca-se o UserStorage num lugar mais global, geralmente no App.js
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userLocal = localStorage.getItem('user');
    if (userLocal) {
      setData(JSON.parse(userLocal));
      setLogin(true);
      setLoading(false);
      navigate('/');
    }
  }, []);

  const userLogin = async (username, password) => {
    const loggedUser = {
      id: '123',
      login: username,
      senha: password,
    };

    try {
      setError(null);
      setLoading(true);
      localStorage.setItem('user', JSON.stringify(loggedUser));
      setLogin(true);
      navigate('/');
    } catch (error) {
      setError(error);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = async () => {
    console.log('logout');
    localStorage.removeItem('user');
    setData(null);
    setLogin(false);
    navigate('/login');
  };

  return (
    <UserContext.Provider
      value={{ userLogin, data, login, error, loading, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
