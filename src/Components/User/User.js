import React, { useContext } from 'react';
import styles from './css/User.module.css';
import { UserContext } from '../../UserContext';
import { NavLink } from 'react-router-dom';
import LoginCreate from '../Login/LoginCreate';

const User = () => {
  const { data } = useContext(UserContext);
  return (
    <div className={`${styles.userContainer} defaultContainer`}>
      <div className={styles.userInfo}>
        <p>{data.email}</p>
      </div>
      <div className={styles.newUser}>
        <LoginCreate />
      </div>
    </div>
  );
};

export default User;
