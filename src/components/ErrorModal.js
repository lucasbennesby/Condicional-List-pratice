import React from "react";
import styles from "./ErrorModal.module.css";
import Button from "./Button";
function ErrorModal(props) {
  const handleClick = (e) => {
    props.handleError(e);
  };
  return (
    <div>
      <div className={styles.bgBlur} />
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>Invalid Input</h1>
        </div>
        <p>Please enter a valid age and name ({props.errorMsg})</p>
        <Button
          handleClick={handleClick}
          text={"Okay"}
        />
      </div>
    </div>
  );
}

export default ErrorModal;
