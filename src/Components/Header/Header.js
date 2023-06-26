import React, { useContext } from 'react';
import styles from './css/Header.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/img/logo.svg';
import { UserContext } from '../../UserContext';

const Header = () => {
  const { userLogout, data } = useContext(UserContext);

  const handleLogout = () => {
    userLogout();
  };

  return (
    <header className={styles.header}>
      <NavLink to="/" end className={styles.logo}>
        <Logo />
      </NavLink>
      {data ? (
        <NavLink to="/conta">
          <button onClick={handleLogout}>Sair</button>Usuário Logado
        </NavLink>
      ) : (
        <NavLink to="/login">Login/Criar</NavLink>
      )}
    </header>
  );
};

export default Header;
