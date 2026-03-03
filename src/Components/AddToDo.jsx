import { useState, useRef, useContext } from "react";
import { MdAddComment } from "react-icons/md";
import { TodoItemsContext } from "../Store/ToDoItemsstore";

function AddToDo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDueDate = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const DueDate = todoDueDate.current.value;
    todoNameElement.current.value = "";
    todoDueDate.current.value = "";
    addNewItem(todoName, DueDate);
  };

  return (
    <div classNameName="container text-center">
      <form classNameName="row kg-row" onSubmit={handleAddButtonClicked}>
        <div classNameName="col-4">
          <input
            type="text"
            placeholder="Enter To-do Here"
            ref={todoNameElement}
          />
        </div>
        <div classNameName="col-4">
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            ref={todoDueDate}
          />
        </div>
        <div classNameName="col-2">
          <button type="submit" classNameName="btn btn-success kg-button">
            Add <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
