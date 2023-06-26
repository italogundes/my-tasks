import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) {
    <Navigate to="/conta" />;
  }

  return (
    <section>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
      </Routes>
    </section>
  );
};

export default Login;
