import { createContext, useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CREATE_USER, TOKEN_POST, USER_GET } from './api';

export const UserContext = createContext(); //O UserContext será importado em cada componente que se quer utilizar as propriedades passadas no value do Provider

export const UserStorage = ({ children }) => {
  //Coloca-se o UserStorage num lugar mais global, geralmente no App.js
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userLogin = async (username, password) => {
    const email = username; // manobra feito devido a API esperar um email e não nome de usuário

    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token, user } = await tokenRes.json();
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      await getUser(token, user.id);
      navigate('/');
    } catch (error) {
      setError(error);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async (token, id) => {
    const { url, options } = USER_GET(token, id);
    const response = await fetch(url, options);
    const json = await response.json();
    setLogin(true);
    setData(json);
  };

  const createUser = async (username, password) => {
    const email = username;
    const localToken = localStorage.getItem('token');

    try {
      setError(null);
      setLoading(true);
      const { url, options } = CREATE_USER({ email, password }, localToken);
      const response = await fetch(url, options);
      console.log(response);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = useCallback(async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setData(null);
    setLogin(false);
    setLogin(false);
    navigate('/login');
  }, []);

  useEffect(() => {
    const autoLogin = async () => {
      const tokenLocal = localStorage.getItem('token');
      const userLocal = localStorage.getItem('user');
      const userObject = JSON.parse(userLocal);
      if (tokenLocal && userLocal) {
        try {
          setError(null);
          setLoading(true);
          await getUser(tokenLocal, userObject.id);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    };
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, login, error, loading, userLogout, createUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
