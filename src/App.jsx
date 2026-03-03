import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import "./App.css";
import WelcomeMsg from "./Components/WelcomeMsg";

import TodoItemsContextProvider, {
  TodoItemsContext,
} from "./Store/ToDoItemsstore";

function App() {
  return (
    <TodoItemsContextProvider>
      <center classNameName="todo-container">
        <AppName></AppName>

        <AddToDo></AddToDo>

        <WelcomeMsg></WelcomeMsg>

        <ToDoItems></ToDoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
