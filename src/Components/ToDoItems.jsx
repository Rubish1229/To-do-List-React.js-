import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";
import { TodoItemsContext } from "../Store/ToDoItemsstore";

const ToDoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div classNameName={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <ToDoItem
          key={index}
          todoName={item.name}
          todoDate={item.date}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
