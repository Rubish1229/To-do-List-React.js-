import { useContext } from "react";
import { TodoItemsContext } from "../Store/ToDoItemsstore";
import styles from "./WelcomeMsg.module.css";

const WelcomeMsg = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && (
      <p classNameName={styles.para}>Well done! All tasks completed... </p>
    )
  );
};

export default WelcomeMsg;
