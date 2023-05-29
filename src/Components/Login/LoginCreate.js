import React from 'react';
import styles from './css/LoginCreate.module.css';

const LoginCreate = () => {
  return (
    <div className={styles.loginCreateContainer}>
      <form className={styles.loginCreate}>Novo usuario</form>
    </div>
  );
};

export default LoginCreate;
