import React from 'react';
import styles from './css/Login.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

const Login = () => {
  const usuario = useForm();
  const senha = useForm('password');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submeteu form');
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login do Usuário</h2>
        <Input label="Usuário" type="text" name="usuario" {...usuario} />
        <Input label="Senha" type="password" name="senha" {...senha} />
        <Button>Entrar</Button>
      </form>
    </div>
  );
};

export default Login;
