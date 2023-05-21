import React from 'react';
import styles from './css/Header.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/img/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" end className={styles.logo}>
        <Logo />
      </NavLink>
      <NavLink to="/conta" className={styles.conta}>
        Usuário Logado
      </NavLink>
    </header>
  );
};

export default Header;
