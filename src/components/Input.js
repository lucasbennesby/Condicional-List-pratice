import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  const handleChange = (e) => {
    let input = e.target.value;

    props.onChange(input);
  };

  return (
    <div>
      <label htmlFor={props.name}>
        {props.label}
        <input
          onChange={handleChange}
          className={styles.input}
          name={props.name}
          type={props.type}
        />
      </label>
    </div>
  );
}

export default Input;
