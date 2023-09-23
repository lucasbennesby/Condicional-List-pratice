import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const handleClick = (e) => {
    props.handleClick(e);
  };
  return (
    <button
      onClick={handleClick}
      className={styles.button}
    >
      {props.text}
    </button>
  );
}

export default Button;
