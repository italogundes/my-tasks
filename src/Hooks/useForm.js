/* eslint-disable no-useless-escape */
import { useState } from 'react';

/* A validação ocorrerá através do tipo do input passado para o componetente <Input/> */

const types = {
  /* Objeto contendo os tipos de tipos possíveis, bem como a expressão regular e sua mensagem de erro equivalente */
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Informe um email válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    message:
      'Deve conter ao menos um dígito, uma letra minúscula, uma letra maiúscula, um caractere especial e  ao menos 8 caracteres.',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const validade = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um Valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    validade(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validade: () => validade(value),
    onBlur: () => validade(value),
  };
};

export default useForm;
