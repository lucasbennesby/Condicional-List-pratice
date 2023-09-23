import React from "react";
import UserItem from "./UserItem";
import styles from "./UserList.module.css";

function UserList(props) {
  const handleRemove = (id) => {
    props.handleRemove(id);
  };

  return (
    <ul className={styles.userList}>
      {props.list.map((item) => (
        <UserItem
          userName={item.name}
          userAge={item.age}
          userId={item.id}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
}

export default UserList;
