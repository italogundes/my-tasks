import React, { useContext } from 'react';
import styles from './css/LoginForm.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const usuario = useForm();
  const senha = useForm('password');
  const { userLogin, loading } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.validate() && senha.validate()) {
      userLogin(usuario.value, senha.value);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <form onSubmit={handleSubmit}>
          <h2>Login do Usuário</h2>
          <Input label="Usuário" type="text" name="usuario" {...usuario} />
          <Input label="Senha" type="password" name="senha" {...senha} />
          {loading ? (
            <Button disabled>Carregando..</Button>
          ) : (
            <Button>Entrar</Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
