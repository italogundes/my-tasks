import React, { useContext } from 'react';
import styles from './css/LoginCreate.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

const LoginCreate = () => {
  const usuario = useForm();
  const senha = useForm('password');

  const { createUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.validate() && senha.validate()) {
      createUser(usuario.value, senha.value);
    }
    usuario.setValue('');
    senha.setValue('');
  };

  return (
    <section onSubmit={handleSubmit}>
      <form className={styles.loginCreate}>
        <h3>Novo Usuário</h3>
        <Input label="Email" type="text" name="usuario" {...usuario} />
        <Input label="Senha" type="password" name="senha" {...senha} />
        <Button type="submit">Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
