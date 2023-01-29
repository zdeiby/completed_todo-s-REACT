import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue]= React.useState('');

    const [openModal, setOpenModal]=React.useState(false)
  
    const completedTodos= todos.filter(todo => todo.completed===true).length;
    const totalTodos=todos.length;
  
    let searchedTodos = [];
  
    if(!searchValue.length >= 1){
      searchedTodos = todos;
    }else {
      searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase()
          const searchText = searchValue.toLowerCase();
         return todoText.includes(searchText);
      })
    
    }
  
  
    const addTodo = (text) =>{
      const newTodos = [...todos];
      newTodos.push({
        completed:false,
        text,
      })
      saveTodos(newTodos)
  
    }
    const completeTodo = (text) =>{
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed= true;
      saveTodos(newTodos)
  
    }
  
    const deleteTodo = (text) =>{
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex,1)
      saveTodos(newTodos)
  
    }
    return(
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>

    )

}

export {TodoContext, TodoProvider};

