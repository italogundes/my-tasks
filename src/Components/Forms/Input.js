import React from 'react';
import styles from './css/Input.module.css';

const Input = (props) => {
  return (
    <>
      <div className={styles.inputContainer}>
        {props.label && <label htmlFor={props.name}>{props.label}</label>}
        <input
          name={props.name}
          value={props.value}
          id={props.id}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={props.inputtask ? props.inputtask : null}
          {...props}
        />
      </div>
      {props.error && <p className={styles.error}>{props.error}</p>}
    </>
  );
};

export default Input;
