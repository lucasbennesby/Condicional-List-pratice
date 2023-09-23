import React from "react";
import styles from "./UserItem.module.css";
import Button from "../Button";

function UserItem(props) {
  const handleClick = (e) => {
    // console.log(props.userId);

    props.handleRemove(props.userId);
  };
  return (
    <li
      // key={props.userId}
      className={styles.userItem}
    >
      {`${props.userName} (${props.userAge} years old)`}
      <Button
        handleClick={handleClick}
        text={"Remove user"}
      />
    </li>
  );
}

export default UserItem;
