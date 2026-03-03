import { createContext } from "react";
import { useState,useReducer } from "react";

export const TodoItemsContext=createContext({
      todoItems:[],
      addNewItem:()=>{},
      deleteItem:()=>{},
    });

  

const todoItemsReducer=(currTodoItems,action)=>{

  let newtodoItems=currTodoItems;
  if(action.type==="NEW_ITEM"){
     newtodoItems=[...currTodoItems,{
      name:action.payload.itemName,
      date:action.payload.itemDueDate
      }];
  }else if(action.type==="DEL_ITEM"){
    newtodoItems=currTodoItems.filter((item)=>item.name!=action.payload.itemName);

  }


  return newtodoItems;
}

    const TodoItemsContextProvider=({children})=>{
      
  const initialToDoItems = [
    {
      name: "Buy Milk",
      date: "4/10/2025",
    },
    {
      name: "Go to College",
      date: "29/12/2004",
    },
    {
      name:"Learn more",
      date:"2/2/2026",
    }
  ];

// const [todoItems,setToDoItems]=useState(initialToDoItems);

const [todoItems,dispatchTodoItems]=useReducer(todoItemsReducer,initialToDoItems);

const addNewItem=(itemName,itemDueDate)=>{

  const newItemAction={
    type:"NEW_ITEM",
    payload:{
      itemName,
      itemDueDate
    }
  }
  dispatchTodoItems(newItemAction);
  // console.log(`New item added : ${itemName} date : ${itemDueDate}`);
  // setToDoItems((currVal)=>[ ...currVal,{
  //   name:itemName,
  //   date:itemDueDate
  // },

  // ]);
};

const deleteItem=(toDoItemName)=>{

    const deleteItemAction={
      type:"DEL_ITEM",
      payload:{
        itemName:toDoItemName
        
      }
    }
    dispatchTodoItems(deleteItemAction);


  // console.log(`Deleted item : ${toDoItemName}`);
  // const newToDoItems= todoItems.filter((item)=> item.name!==toDoItemName);
  // setToDoItems(newToDoItems);
}
 return (
    <TodoItemsContext.Provider value={{
      todoItems:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem,
    }}>
      {children}
      </TodoItemsContext.Provider>
 )

    }

    export default TodoItemsContextProvider;