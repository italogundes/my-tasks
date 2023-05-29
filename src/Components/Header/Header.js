import React, { useContext } from 'react';
import styles from './css/Header.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/img/logo.svg';
import { UserContext } from '../../UserContext';

const Header = () => {
  const { userLogout } = useContext(UserContext);

  const handleLogout = () => {
    userLogout();
  };

  return (
    <header className={styles.header}>
      <NavLink to="/" end className={styles.logo}>
        <Logo />
      </NavLink>
      <NavLink to="/conta" className={styles.conta}>
        Usuário Logado
      </NavLink>
      <button onClick={handleLogout}>Sair</button>
    </header>
  );
};

export default Header;
