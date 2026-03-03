import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TodoItemsContext } from "../Store/ToDoItemsstore";

function ToDoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div classNameName="container">
      <div classNameName="row kg-row">
        <div classNameName="col-4">{todoName}</div>
        <div classNameName="col-4">{todoDate}</div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-danger kg-button"
            onClick={() => {
              deleteItem(todoName);
            }}
          >
            Delete <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
